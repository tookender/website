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

export async function getNotes(author: string) {
  const result = await pool.query({
    text: 'SELECT * FROM notes WHERE author = $1 ORDER BY date DESC',
    values: [author],
  });
  return result.rows;
}

export async function getNote(name: string, author: string) {
  const result = await pool.query({
    text: 'SELECT * FROM notes WHERE name = $1 AND author = $2',
    values: [name, author],
  });
  return result.rows;
}

export async function createNote(name: string, author: string, content: string) {
  const result = await pool.query({
    text: `
      INSERT INTO notes (name, author, content)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
    values: [name, author, content],
  });
  return result.rows[0];
}

export async function modifyNote(oldName: string, newName: string, author: string, content: string) {
  const result = await pool.query({
    text: `
      UPDATE notes
      SET name = $1, content = $2
      WHERE name = $3 AND author = $4
      RETURNING *
    `,
    values: [newName, content, oldName, author],
  });
  return result.rows[0];
}

export async function deleteNote(name: string, author: string) {
  const result = await pool.query({
    text: `
      DELETE FROM notes
      WHERE name = $1 AND author = $2
      RETURNING *
    `,
    values: [name, author],
  });
  return result.rows[0];
}

// Graceful shutdown
process.on('SIGINT', async () => {
  await pool.end();
  process.exit(0);
});