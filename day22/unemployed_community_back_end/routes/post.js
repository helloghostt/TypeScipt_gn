const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { afterUploadImage, uploadPost } = require("../controllers/post");
const { isLoggedIn } = require("../middlewares");

const router = express.Router();

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  //multer- 업로드 미들웨어 생성
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// POST(만든다) /post/img (게시글)
router.post("/img", isLoggedIn, upload.single("img"), afterUploadImage);

// POST /post
const upload2 = multer();
router.post("/", isLoggedIn, upload2.none(), uploadPost);

module.exports = router;
