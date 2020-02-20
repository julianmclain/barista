const Router = require("koa-router");
const router = new Router();
const coffeeController = require("../controllers/coffeeController");
const { checkJwt } = require("../auth/auth");

router.prefix("/coffees");
router.get("/", checkJwt, coffeeController.findAll);

module.exports = router;
