import {API_URL} from "../../setting/API";
import {Movie} from "./movieSlice";
import axios from "../../setting/our_axios";


const API = API_URL+"/movies"

export function getAllMovie() {
    return axios.get(API);
}
export function saveMovie(movie:Movie){
    console.log('Save movie backend ',movie);
    return axios.post(API,movie);
}
export function updateMovie(movie:Movie){
    console.log('update movie backend ',movie);
    return axios.patch(API+`/${movie._id}`,movie);
}
export function deleteMovie(movie:Movie){
    console.log('Delete movie backend ',movie);
    return axios.delete(API+`/${movie._id}`,movie);
}