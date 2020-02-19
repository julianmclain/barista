// Design taken from - https://node-postgres.com/guides/project-structure
const { Pool } = require("pg");
const { DATABASE } = require("../config");

const config = {
  host: DATABASE.PGHOST,
  user: DATABASE.PGUSER,
  password: DATABASE.PGPASSWORD,
  datatabase: DATABASE.PGDATABASE,
  port: DATABASE.PGPORT
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
