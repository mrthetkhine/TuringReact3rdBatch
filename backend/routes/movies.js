var express = require('express');
var router = express.Router();
let movies = require('../controllers/MovieController');

router.get('/', movies.getAllMovie);
router.get('/:movieId', movies.getMovieById);
router.get('/title/:title', movies.findMovieByTitle);
router.post('/', movies.newMovie);
router.patch('/:movieId', movies.updateMovie);
router.delete('/:movieId', movies.deleteMovie);
module.exports = router;
