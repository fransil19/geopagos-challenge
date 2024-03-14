const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();


router.get("/", middlewares.searchMiddleware, controllers.getTournament)
router.post("/", middlewares.tournamentMiddleware, controllers.getChampion)

module.exports = router;