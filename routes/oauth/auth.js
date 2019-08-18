const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { tokenSecret } = require('../../config/env.config');

const userList = [{
  id: 1,
  username: 'admin',
  password: 'admin',
  name: '管理员'
}]
router.post('/login', async (req, res, next) => {
  const {username, password} = req.body;
  const user = userList.find(guser => guser.username === username);
  if (user) {
    if (user.password === password) {
      const token = jwt.sign(user, tokenSecret, {
        expiresIn : 60*60*24// 授权时效24小时
      });
      res.json({
        token: token
      });
    } else {
      res.json({})
    }
  } else {
    res.json({error: '用户不存在'});
  }
})

module.exports = router;