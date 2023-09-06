const { Router } = require("express");
const router = new Router();
const PostController = require("../controllers/postController");

router.post("/", PostController.create);
router.get("/", PostController.getAll);
router.get("/:id", PostController.getOne);
router.put("/:_id", PostController.update);
router.delete("/:_id", PostController.delete);

module.exports = router;
