const express = require('express');
const app = express();
const {id, port} = require('./config/env.config');


app.get('/getMenuData', (req, res) => {
  res.send({code: 200, data: [{name: 'Canvas'}]});
});

app.listen(port, () => {
  console.log(`server started at port--${port}`);
});