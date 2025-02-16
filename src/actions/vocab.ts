// I will try to make the vocab system use a database but its hard...
import { Pool } from 'pg';

// Validate required environment variables
const requiredEnvVars = ['DATABASE_HOST', 'DATABASE_USER', 'DATABASE_PASSWORD', 'DATABASE_NAME'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`${envVar} is not defined`);
  }
}

// Create connection pool with efficient defaults
const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  max: 20, // Maximum number of connections in the pool
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 2000,
});

export async function getVocab(author: string) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      `SELECT words FROM vocabulary WHERE author = $1`,
      [author]
    );
    return result.rows[0]?.words || [];
  } finally {
    client.release();
  }
}

export async function addVocab(author: string, newEntry: { question: string; answer: string }) {
  const client = await pool.connect();
  try {
    await client.query(
      `INSERT INTO vocabulary (author, words) 
       VALUES ($1, $2) 
       ON CONFLICT (author) DO UPDATE 
       SET words = vocabulary.words || $2`,
      [author, JSON.stringify([newEntry])]
    );
  } finally {
    client.release();
  }
}

export async function removeVocab(author: string, question: string) {
  const client = await pool.connect();
  try {
    await client.query(
      `UPDATE vocabulary 
       SET words = (SELECT jsonb_agg(entry) 
                   FROM jsonb_array_elements(words) AS entry 
                   WHERE entry->>'question' != $2)
       WHERE author = $1`,
      [author, question]
    );
  } finally {
    client.release();
  }
}

export async function modifyVocab(author: string, question: string, newAnswer: string) {
  const client = await pool.connect();
  try {
    await client.query(
      `UPDATE vocabulary 
       SET words = (SELECT jsonb_agg(
                      jsonb_set(entry, '{answer}', to_jsonb($3::text))
                    ) FROM jsonb_array_elements(words) AS entry 
                      WHERE entry->>'question' = $2 OR entry->>'question' IS DISTINCT FROM $2)
       WHERE author = $1`,
      [author, question, newAnswer]
    );
  } finally {
    client.release();
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  await pool.end();
  process.exit(0);
});