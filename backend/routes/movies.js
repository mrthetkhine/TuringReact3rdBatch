var express = require('express');
var router = express.Router();
let movies = require('../controllers/MovieController');

router.get('/', movies.getAllMovie);
module.exports = router;
