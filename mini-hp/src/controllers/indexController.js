const pool = require("../../db/db");

// 메인 화면
exports.GET_MAIN = async (req, res) => {
  try {
    return res.render("index", {
      page: "user/signup",
    });
  } catch (error) {
    console.log(error);
  }
};

