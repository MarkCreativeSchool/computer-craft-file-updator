const express = require('express');
const router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  /*
  const dir = "/Users/mark.7/Library/Application Support/minecraft/versions/1.12.2-forge1.12.2-14.23.5.2768/saves/New World/computer"
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    console.log(files);
  });
   */
  res.render('index', { title: 'Express' });
});

module.exports = router;
