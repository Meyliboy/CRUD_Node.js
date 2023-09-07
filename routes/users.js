const { Router } = require("express");
const router = new Router();
const postController = require("../controllers/postController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", postController.create);
router.post("/upload", upload.single("img"), postController.fileUpload);
router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.put("/:_id", postController.update);
router.delete("/:_id", postController.delete);

module.exports = router;
