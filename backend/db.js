//db.js

const { Client } = require('pg');

const client = new Client({
  user: 'postgres.lkfbusvifpqixihjqrpc', // Replace with your Supabase username
  host: 'aws-0-ap-southeast-1.pooler.supabase.com', // e.g., db.supabase.co
  database: 'postgres', // Replace with your Supabase database name
  password: process.env.DB_PW, // Replace with your Supabase password
  port: 5432, // Supabase uses the standard PostgreSQL port
  ssl: {
    rejectUnauthorized: false, // Necessary for secure connections to Supabase
  },
});

module.exports = client;
