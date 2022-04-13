const controllers = require("../controllers/index.js");
const router = require("express").Router();

router.post("/signup", controllers.signUp);

module.exports = router;