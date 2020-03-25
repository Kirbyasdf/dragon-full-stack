require("dotenv").config();
//^ for some reason I have to put this in here for bash calls...but the best place is at the top of your main index/app.js
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432
});

module.exports = pool;
