const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

router.post("/", middlewares.tournamentMiddleware, controllers.getChampion)

module.exports = router;