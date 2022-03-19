let movieService = require('../services/MovieService');
const getAllMovie = async function (req, res, next) {
    //console.log('Movie service ',res);
    try {
        const movies = await movieService.getAllMovie();
        if(!movies) throw Error('No movies');
        await res.status(200).json(movies);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}

module.exports = {
    getAllMovie
}
