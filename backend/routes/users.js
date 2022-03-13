var express = require('express');
var router = express.Router();
let users = require('../controllers/UsersController');
let path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/hello', function(req, res, next) {
  res.send('Hello from user route');
});
router.get('/home', function(req, res, next) {
  console.log('Home');
  res.redirect("../");
});
router.get('/send', function(req, res, next) {
  console.log('Send');
  //res.set('Content-Type', 'text/html');
  res.setHeader('Content-Type', 'text/plain');
  res.send(`<h1>Hello</h1>`);
});
router.get('/sendFile', function(req, res, next) {
  console.log('Send');
  //res.set('Content-Type', 'text/html');

  let filePath = path.join(__dirname, '../public', 'demo.txt');
  console.log("Path ",filePath);
  res.setHeader('Content-Type', 'text/plain');
  //throw Error('Porblem')
  res.sendFile(filePath);
});

router.get('/:userId', users.getUserById);

router.get('/download', function(req, res, next) {
  res.download('./public/demo.txt');
  //res.end();
});
module.exports = router;
