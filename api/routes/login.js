var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
});

// POST method route
router.post('/', (req, res) => {
  console.log(req)
  console.log(res)
})

module.exports = router;
