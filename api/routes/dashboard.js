var express = require('express');
var router = express.Router();

/* GET dashboard listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a dashboard');
});

module.exports = router;
