var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Admin home');
});
router.get('/ab?cd', function(req, res, next) {
    res.send('Ab?cd');
});
router.get('/profile/:adminId(\\d+)', function(req, res, next) {
    console.log('Admin Id ',req.params.adminId);
    res.send(`Admin ${req.params.adminId}`);
});
router.get('/multi', function(req, res, next) {
    console.log('Multi First handler');
    //res.send(`Multi First handler'`);
    next();
});
router.get('/multi', function(req, res, next) {
    console.log('Multi Second handler');
    res.send(`Multi Second handler'`);
});


module.exports = router;