import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { sql } from 'drizzle-orm';

dotenv.config({ path: '.env.local' });

console.log('Connection string:', process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);

const neonConnection = neon(process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);
const db = drizzle(neonConnection);

async function testConnection() {
  try {
    const result = await db.execute(sql`SELECT 1 as value`);
    console.log('Connection successful:', result);
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection();
