var express = require("express");
var router = express.Router();

// 컨트롤러
const indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", indexController.GET_MAIN);


module.exports = router;
