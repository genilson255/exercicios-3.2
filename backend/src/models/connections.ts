import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: password.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});