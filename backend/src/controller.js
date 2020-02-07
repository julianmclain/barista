const db = require("./db");

module.exports = async function main(ctx) {
  const res = await db.query("SELECT $1::text as message", ["Hello world"]);
  ctx.body = res.rows[0].message;
};
