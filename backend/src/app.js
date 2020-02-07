const path = require("path");
const envPath = path.resolve(__dirname, "../../.env");
console.log(envPath);
require("dotenv").config({ path: envPath });

const Koa = require("koa");

const app = new Koa();

app.use(async ctx => {
  ctx.body = {
    status: "success",
    message: "hello, world!"
  };
});

module.exports = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
