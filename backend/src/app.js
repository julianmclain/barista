require("dotenv").config();
const Koa = require("koa");
const mountRoutes = require("./routes");

const app = new Koa();
mountRoutes(app);

module.exports = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
