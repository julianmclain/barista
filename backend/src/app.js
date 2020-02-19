require("dotenv").config();
const config = require("./config");
const Koa = require("koa");
const cors = require("@koa/cors");
const helmet = require("koa-helmet");
const morgan = require("koa-morgan");
const bodyParser = require("koa-bodyparser");
const jwt = require("koa-jwt");
const jwksRsa = require("jwks-rsa");
const mountRoutes = require("./routes");

const app = new Koa();
app.use(helmet());
app.use(bodyParser());
app.use(cors());
app.use(morgan("dev"));

// const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://<YOUR_AUTH0_DOMAIN>/.well-known/jwks.json`
//   }),

//   // Validate the audience and the issuer.
//   audience: "<YOUR_AUTH0_CLIENT_ID>",
//   issuer: `https://<YOUR_AUTH0_DOMAIN>/`,
//   algorithms: ["RS256"]
// });

mountRoutes(app);

module.exports = app.listen(config.PORT, () => {
  console.log(`Server listening on port: ${config.PORT}`);
});
