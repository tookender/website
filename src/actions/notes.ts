import { neon } from "@neondatabase/serverless";

export async function getNotes(author: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql = neon(process.env.DATABASE_URL);
  
  const data = await sql`
    SELECT * FROM notes 
    WHERE author = ${author} 
    ORDER BY date DESC
  `;
  return data;
}

export async function getNote(name: string, author: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql = neon(process.env.DATABASE_URL);
  
  // Get notes from the database filtered by author
  const data = await sql`SELECT * FROM notes WHERE name = ${name} AND author = ${author}`;
  return data;
}

export async function createNote(name: string, author: string, content: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql = neon(process.env.DATABASE_URL);
  
  // Insert a new note into the database
  const data = await sql`
    INSERT INTO notes (name, author, content)
    VALUES (${name}, ${author}, ${content})
    RETURNING *;
  `;
  return data[0];
}

export async function modifyNote(oldName: string, newName: string, author: string, content: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql = neon(process.env.DATABASE_URL);
  
  // Update a note's content based on the name and author
  const data = await sql`
    UPDATE notes
    SET name = ${newName},
        content = ${content}
    WHERE name = ${oldName} AND author = ${author}
    RETURNING *;
  `;
  return data[0];
}

export async function deleteNote(name: string, author: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql = neon(process.env.DATABASE_URL);
  
  // Insert a new note into the database
  const data = await sql`
    DELETE FROM notes
    WHERE name = ${name} AND author = ${author}
  `;
  return data[0];
}