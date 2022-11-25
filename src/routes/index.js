var express = require("express");
var router = express.Router();

// 컨트롤러
const indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", indexController.GET_MAIN);

// // test
// router.get("/test", indexController.TEST);
// router.post("/join", indexController.TEST_JOIN);

module.exports = router;