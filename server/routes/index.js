const { Router } = require("express");
const router = new Router();
const AuthController = require("../controllers/auth");
const PostController = require("../controllers/post");
const Auth = require("../middleware/auth");
const UserController = require("../controllers/user");

router.post("/auth", AuthController.authenticate);
router.post("/register", AuthController.register);

router.get("/posts", PostController.findAll);
router.post("/posts", Auth.authorize, PostController.create);
router.delete("/posts/:id", Auth.authorize, PostController.destroy);
// router.patch("/posts/:id", PostController.update);
// router.get("/posts/:id", PostController.findOne);

// router.get("/users/:id/posts", PostController.findAllByUser);

router.get("/users", UserController.findAll);
router.post("/users", Auth.authorize, Auth.admin, UserController.findAll);
router.delete("/users/:id", Auth.authorize, Auth.admin, UserController.findAll);
router.patch("/users/:id", Auth.authorize, Auth.admin, UserController.findAll);

module.exports = router;
