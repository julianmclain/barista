const Koa = require("koa");
const { Client } = require("pg");

// Init app
const app = new Koa();

// Connect to DB
const client = new Client();
client.connect();

app.use(async function main(ctx) {
  const res = await client.query("SELECT $1::text as message", ["Hello world"]);
  ctx.body = res.rows[0].message;
});

app.listen(3000);
