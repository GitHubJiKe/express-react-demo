var express = require('express');
var router = express.Router();
var { makeReturnObj, mockUsers } = require('../../util')

router.get('/', async function (req, res, next) {
  await res.send(makeReturnObj(true, { data: mockUsers(), message: "获取成功" }))
});

module.exports = router;
