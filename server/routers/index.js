const controllers = require("../controllers/index.js");
const postControllers = require("../controllers/post.js");
const commentControllers = require("../controllers/comment.js");
const router = require("express").Router();

router.get("/signup/:id", controllers.getUsername);
router.get("/getPosts", postControllers.getAllPosts);
router.post("/signup", controllers.signUp);
router.post("/createPost", postControllers.createNewPost);
router.post("/createComment", commentControllers.addComment);
router.delete("/deletePost/:id", postControllers.deletePost);
router.delete("/deleteComment/:id", commentControllers.deleteComment);

module.exports = router;