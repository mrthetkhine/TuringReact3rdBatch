import {API_URL} from "../../setting/API";
/*import {Movie} from "./movieSlice";*/
import axios from "../../setting/our_axios";


const API = API_URL+"movies"

export function getAllMovie(){
    console.log('Called getAllMovie with axios');
    return axios.get(API);
}