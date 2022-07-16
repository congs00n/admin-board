"use strict";
/** nodejs에서 controller를 구현하는 것은 어려운 일이다..
 * view는 views 폴더에 분리를 했는데 controller는 어느 부분이며, 어떻게 분리를 해야 할까?
 * 
 * 클라이언트의 요청을 처리하는 게 views.. 즉 화면
 * 요청헤더와 응답헤더가 url에서 클라이언트의 요청을 받아 해석해 오는 과정이 controller..
 * 따라서 index.js 모듈의 
 * (req,res) => {res.render("home/login");} 부분이 controller라고 할 수 있다. 
 * 
 * 분리하는 과정은 다음과 같다.
 * - 먼저 routes/home 경로에 home.ctrl.js 모듈을 생성한다.
 * - 그 안에 home 이라는 컨트롤러 함수를 만들고 이를 외부에서 사용할 수 있도록 한다.
 * - index.js 모듈에서 컨트롤러에 해당하는 부분을 잘라낸 후 home 컨트롤러 함수에 대입한다. 
*/
const express = require("express");
const router = express.Router();

// 변수 ctrl 안에 home.ctrl 의 home과 login 객체를 불러와 사용하는 것  
const ctrl = require("./home.ctrl");
router.get("/" , ctrl.home);

// 실제 클라이언트의 /login 이라는 요청을 받았을 때 요청에 해당하는 기능을 수행하는 부분은 
// (req,res) => {res.rendr("home/login");}
// 따라서 이 부분이 controller 라고 생각하면 될 듯 하다. 
router.get("/tables", ctrl.tables);

// 미들웨어를 등록하는 메소드 -> use(); 일단 암기 
// 현재 loing-lecture 폴더에서 routes 에서 home 의 javascript를 읽어와줘!! 

// 이 index.js 파일을 외부에서 사용할 수 있도록 던져주기~~
module.exports = router;