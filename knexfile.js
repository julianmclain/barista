require("dotenv").config();
const path = require("path");

const BASE_PATH = path.join(__dirname, "backend", "src", "db");
const PG_DEV_CONNECTION_STRING = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;
const PG_TEST_CONNECTION_STRING = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE_TEST}`;
const MIGRATION_DIR_PATH = path.join(BASE_PATH, "migrations");
const SEED_DIR_PATH = path.join(BASE_PATH, "seeds");

module.exports = {
  test: {
    client: "pg",
    connection: PG_TEST_CONNECTION_STRING,
    migrations: {
      directory: MIGRATION_DIR_PATH
    },
    seeds: {
      directory: SEED_DIR_PATH
    }
  },
  development: {
    client: "pg",
    connection: PG_DEV_CONNECTION_STRING,
    migrations: {
      directory: MIGRATION_DIR_PATH
    },
    seeds: {
      directory: SEED_DIR_PATH
    }
  }
};
