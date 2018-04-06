var express = require('express');
var router = express.Router();
var { makeReturnObj } = require('../../util')
const validUserInfo = (info) => {
  if (info.username == 'Peter' && info.password == '123456') return true;
  else return false;
}

router.post('/', async function (req, res, next) {
  if (validUserInfo(req.body)) {
    await res.send(makeReturnObj(true, { data: null, message: "登录成功" }))
  } else {
    await res.send(makeReturnObj(false, { message: '登录失败' }))
  }
});

module.exports = router;
