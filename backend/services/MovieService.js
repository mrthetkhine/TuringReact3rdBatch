let Movies = require('../model/movies');
const getAllMovie = async ()=>
{
   return Movies.find();
};
const getMovieById= async (movieId)=>{
    return Movies.findById(movieId);
}
const newMovie = async(movie)=>
{
    const newMovie = new Movies(movie);
    return newMovie.save();
}
const updateMovie = async(movieId,movie)=>{
    const newMovie = await Movies.findByIdAndUpdate(movieId, movie,{new: true});
    return newMovie;
}
const deleteMovie = async(movieId)=>{
    const deletedMovie = await Movies.findByIdAndDelete(movieId);
    return deletedMovie;
}
const searchMovieByTitle = async(movieTitle)=>
{
    const movies = await Movies.find({
        title: {
            $regex:movieTitle
        }
    });
    return  movies;
}
module.exports = {
    getAllMovie,
    getMovieById,
    newMovie,
    updateMovie,
    deleteMovie,
    searchMovieByTitle,
}