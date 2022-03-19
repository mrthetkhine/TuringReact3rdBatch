let Movies = require('../model/movies');
const getAllMovie = async ()=>
{
   return Movies.find();
};
module.exports = {
    getAllMovie
}