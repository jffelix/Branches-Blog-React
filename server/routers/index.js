const controllers = require("../controllers/index.js");
const postControllers = require("../controllers/post.js");
const commentControllers = require("../controllers/comment.js");
const router = require("express").Router();

router.get("/signup/:id", controllers.getUsername);
router.get("/getPosts", postControllers.getAllPosts);
router.post("/signup", controllers.signUp);
router.post("/createPost", postControllers.createNewPost);
router.post("/createComment", commentControllers.addComment);

module.exports = router;