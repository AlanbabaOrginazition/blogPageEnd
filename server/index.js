const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const {ip, port} = require('../config/env.config');

module.exports = {
  createServer: () => {
    app.all('*', (req, res, next) => {
      // TODO 支持跨域访问
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
      res.setHeader("Access-Control-Expose-Headers", "*");
      next();
    });
    app.use('/', require(path.join(__dirname, '../routes')));
    app.use(history({}));
    app.use(express.static('public'));
    app.listen(port, ip, () => {
      console.log(`server started at port -- ${port}`);
    });
  }
}
