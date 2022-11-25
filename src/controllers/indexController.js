// const pool = require("../../db/db");

// 메인 화면
exports.GET_MAIN = async (req, res) => {
  try {
    return res.render("index", {
      page:'./user/signup',
    });
  } catch (error) {
    console.log(error);
  }
};

// // 테스트
// exports.TEST = async (req, res) => {
//   try {
//     return res.render("test", {});
//   } catch (error) {
//     console.log(error);
//   }
// };
// exports.TEST_JOIN = async (req, res) => {
//   try {
//     let { uid, upw, uname } = req.body;

//     const chk_uid = await pool.query("SELECT * FROM USER WHERE user_uid = ?", [
//       uid,
//     ]);

//     if (chk_uid[0].length === 0) {
//       // 데이터베이스에 추가하는 쿼리문
//       const join = await pool.query("INSERT INTO USER VALUES (?, ?, ?)", [
//         uid,
//         upw,
//         uname,
//       ]);
//     } else {
//       return res.send(
//         '<script>alert("이미 가입된 아이디입니다.");location.href="/";</script>'
//       );
//     }

//     return res.redirect("/");
//   } catch (error) {
//     console.log(error);
//   }
// };