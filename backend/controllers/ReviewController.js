const reviewService = require('../services/ReviewService');
const getAllReview = async (req,res,next)=>{
    try {
        const reviews = await reviewService.getAllReview();
        if(!reviews) throw Error('No reviews');
        await res.status(200).json(reviews);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const getReviewById = async (req,res,next)=>{
    try {
        let reviewId = req.params['reviewId'];
        const review = await reviewService.getReviewById(reviewId);
        if(!review) throw Error('No review');
        await res.status(200).json(review);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const getReviewByMovieId = async (req,res,next)=>{
    try {
        let movieId = req.params['movieId'];
        const review = await reviewService.getReviewByMovieId(movieId);
        if(!review) throw Error('No review');
        await res.status(200).json(review);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
};
const saveReview = async (req,res,next)=>{
    try {
        const body = req.body;
        const review = await reviewService.saveReview(body);
        if(!review) throw Error('review cannot be saved');
        await res.status(201).json(review);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
module.exports = {
    getAllReview,
    getReviewById,
    saveReview,
    getReviewByMovieId,
}
