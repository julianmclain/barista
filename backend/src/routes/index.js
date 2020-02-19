const coffeeRouter = require("./coffees.js");
const healthRouter = require("./health");

// Mount each individual router into the main application
module.exports = app => {
  app.use(healthRouter.routes());
  app.use(coffeeRouter.routes());
};
