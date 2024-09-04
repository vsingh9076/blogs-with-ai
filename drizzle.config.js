require('dotenv').config({ path: '.env.local' });

console.log("DB URL:", process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);

/** @type { import("drizzle-kit").Config } */
module.exports = {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
    }
  };
