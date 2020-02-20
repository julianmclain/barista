require("dotenv").config();
const config = require("./config/config");
const Koa = require("koa");
const cors = require("@koa/cors");
const helmet = require("koa-helmet");
const morgan = require("koa-morgan");
const bodyParser = require("koa-bodyparser");
const mountRoutes = require("./routes");

const app = new Koa();
app.use(helmet());
app.use(bodyParser());
app.use(cors());
app.use(morgan("dev"));

mountRoutes(app);

module.exports = app.listen(config.PORT, () => {
  console.log(`Server listening on port: ${config.PORT}`);
});
