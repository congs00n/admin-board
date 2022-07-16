"use script"

const PORT = 3000;
const app = require("../app.js");

// 서버 실행시키는 코드가 여기 있으니 이걸 실행시켜야 한다. 
app.listen(PORT, () => {
  console.log("서버 가동");
});
// 이러면 앱이라는 것을 찾을 수가 없으니! 
// 불러와야 함!!