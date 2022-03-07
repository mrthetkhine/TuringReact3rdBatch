var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/hello', function(req, res, next) {
  res.send('Hello from user route');
});
module.exports = router;
