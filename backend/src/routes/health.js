const Router = require("koa-router");
const router = new Router();
const healthController = require("../controllers/healthController.js");

router.get("/", healthController.healthCheck);
module.exports = router;
