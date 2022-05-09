import {API_URL} from "../../setting/API";
import {Movie} from "./../movie/movieSlice";
import {Review} from './reviewSlice';
import axios from "../../setting/our_axios";


const API = API_URL+"/reviews"

export function getAllReviewByMovieId(movieId:string) {
    return axios.get(API+`/movie/${movieId}`);
}