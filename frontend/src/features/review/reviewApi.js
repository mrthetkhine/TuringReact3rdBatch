import {API_URL} from "../../setting/API";
/*import {Movie} from "./movieSlice";*/
import axios from "../../setting/our_axios";


const API = API_URL+"reviews"

export function getAllReviewByMovieId(movieId){
    console.log('Called getAllReviewByMovieId with axios');
    return axios.get(API+`/movie/${movieId}`);
}

export function saveReview(review){
    console.log('Called saveReview with axios');
    return axios.post(API,review);
}

export function deleteReview(reviewId){
    console.log('Called saveReview with axios');
    return axios.delete(API+`/${reviewId}`);
}
export function updateReview(reviewId,review){
    console.log('Called updateReview with axios ',review);
    return axios.patch(API+`/${reviewId}`,review);
}
