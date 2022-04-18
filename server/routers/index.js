const controllers = require("../controllers/index.js");
const postControllers = require("../controllers/post.js");
const commentControllers = require("../controllers/comment.js");
const router = require("express").Router();

router.get("/signup/:id", controllers.getUsername);
router.get("/getPosts", postControllers.getAllPosts);
router.get("/userPosts/:id", postControllers.getUserBlogs);
router.post("/signup", controllers.signUp);
router.post("/createPost", postControllers.createNewPost);
router.post("/createComment", commentControllers.addComment);
router.patch("/updatePost/:id", postControllers.updatePost);
router.patch("/updateComment/:id", commentControllers.updateComment);
router.patch("/like/:id", postControllers.likePost);
router.patch("/likeComment/:id", commentControllers.likeComment);
router.patch("/unlike/:id", postControllers.unlikePost);
router.delete("/deletePost/:id", postControllers.deletePost);
router.delete("/deleteComment/:id", commentControllers.deleteComment);

module.exports = router;