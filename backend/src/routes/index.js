const coffeeRouter = require("./coffees.js");

// Mount each individual router into the main application
module.exports = app => {
  app.use(coffeeRouter.routes());
};
