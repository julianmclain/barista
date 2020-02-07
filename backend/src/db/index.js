// Design taken from - https://node-postgres.com/guides/project-structure
const { Pool } = require("pg");

const config = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  datatabase: process.env.PGPASSWORD,
  port: process.env.PGPORT
};
const pool = new Pool(config);

module.exports = {
  query: async (text, params) => {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("executed query", { text, duration, rows: res.rowCount });
    return res;
  }
};
