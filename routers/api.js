const express = require("express")
const router = express.Router()
const apiController = require("../controllers/api")
const multer = require("multer")
const authMiddleware = require("../middleware/auth");
const errors = require("../middleware/errors");
const { body, checkSchema } = require("express-validator");
const postCreate = require("../validations/postCreate");
const postEdit = require("../validations/postEdit");
const postDelete = require("../validations/postDelete");

const authMulterCreateMiddlware = [authMiddleware, multer({dest: "public/images"}).single("image"), checkSchema(postCreate)]
const authMulterEditMiddleware = [authMiddleware, multer().none(), checkSchema(postEdit)]
const authMulterDeleteMiddleware = [authMiddleware, multer().none(), checkSchema(postDelete)]

router.get("/posts", apiController.index)
router.post("/post", authMulterCreateMiddlware, apiController.store)
router.post("/delete", authMulterDeleteMiddleware, apiController.destroy)
router.get("/post/:slug", apiController.show)
router.post("/edit", authMulterEditMiddleware, apiController.edit)





module.exports = router