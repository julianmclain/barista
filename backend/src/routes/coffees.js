const Router = require("koa-router");
const router = new Router();
const coffeeController = require("../controllers/coffeeController");

router.prefix("/coffees");
router.get("/", coffeeController.findAll);

module.exports = router;
