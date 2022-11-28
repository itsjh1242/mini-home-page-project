var express = require('express');
var router = express.Router();

// 유저 컨트롤러
const userCtrl = require("../controllers/userController");

// 로그인 라우터
router.get("/signin", userCtrl.GET_SIGNIN);
// 로그인 버튼을 눌렀을 때
router.post("/login");

// 회원가입 라우터
// 회원가입 버튼을 눌렀을 때 실행됨
router.post("/signup", userCtrl.SIGNUP);

module.exports = router;
