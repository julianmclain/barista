require("dotenv").config();
const Koa = require("koa");
const db = require("./db");

// Init app
const app = new Koa();

app.use(async function main(ctx) {
  const res = await db.query("SELECT $1::text as message", ["Hello world"]);
  ctx.body = res.rows[0].message;
});

app.listen(3000);
