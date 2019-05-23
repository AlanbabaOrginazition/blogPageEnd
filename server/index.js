const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const {ip, port} = require('../config/env.config');

module.exports = {
  createServer: () => {
    app.use(history({}));
    app.use(express.static('public'));
    app.get('/getMenuData', (req, res) => {
      res.send({code: 200, data: [{name: 'canvas'}]});
    });
    app.listen(port, ip, () => {
      console.log(`server started at port -- ${port}`);
    });
  }
}
