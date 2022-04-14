const controllers = require("../controllers/index.js");
const postControllers = require("../controllers/post.js");
const router = require("express").Router();

router.get("/signup/:id", controllers.getUsername);
router.get("/getPosts", postControllers.getAllPosts);
router.post("/signup", controllers.signUp);
router.post("/createPost", postControllers.createNewPost);

module.exports = router;