const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.headers);
  const filePath = path.resolve('res',  `china.json`);
  // fs.writeFile(filePath, JSON.stringify(req.body), err => {
  //   if (err) {
  //     console.error(err);
  //     res.json({status: 'failed'});
  //   } else {
  //     console.log('write file success!');
  //     res.json({status: 'success'});
  //   }
  // });
  res.json({status: 'success'});
});

module.exports = router;
