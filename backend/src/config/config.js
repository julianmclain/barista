// Ensure require('dotenv').config() is run before this module is required

exports.NODE_ENV = process.env.NODE_ENV || "development";
exports.PORT = Number.parseInt(process.env.PORT, 10) || 3000;
exports.DATABASE = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  datatabase: process.env.PGDATABASE,
  port: process.env.PGPORT
};
exports.AUTH_0_DOMAIN = process.env.AUTH_0_DOMAIN;
exports.AUTH_0_CLIENT_ID = process.env.AUTH_0_CLIENT_ID;

// Output config object in development to help with sanity-checking
if (exports.NODE_ENV === "development" || exports.NODE_ENV === "test") {
  console.log(exports);
}
