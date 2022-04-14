const controllers = require("../controllers/index.js");
const router = require("express").Router();

router.get("/signup/:id", controllers.getUsername);
router.post("/signup", controllers.signUp);
router.post("/createPost", controllers.createNewPost);

module.exports = router;