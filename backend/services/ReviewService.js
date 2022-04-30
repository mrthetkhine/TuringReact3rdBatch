const mongoose = require('mongoose');
let Reviews = require('../model/review');
let Movies = require('../model/movies');

const getAllReview = async ()=>{
    return Reviews.find();
}
const getReviewById = async(reviewId)=>{
    return Reviews.findById(reviewId).populate("movie");
}
const getReviewByMovieId = async(movieId)=>{
    return Reviews.find({movie:movieId}).populate("movie");
}
const saveReview = async(review)=>{
    const newReview = new Reviews({
        movie: mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review,

    });

    return newReview.save();
}
module.exports = {
    getAllReview,
    saveReview,
    getReviewById,
    getReviewByMovieId
}