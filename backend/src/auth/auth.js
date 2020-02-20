const jwt = require("koa-jwt");
const jwksRsa = require("jwks-rsa");
const { AUTH_0_DOMAIN, AUTH_0_CLIENT_ID } = require("../config/config");

exports.checkJwt = jwt({
  secret: jwksRsa.koaJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${AUTH_0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: AUTH_0_CLIENT_ID,
  issuer: `https://${AUTH_0_DOMAIN}/`,
  algorithms: ["RS256"]
});
