import {API_URL} from "../../setting/API";
import axios from "../../setting/our_axios";




export function login(username:string,password:string){
    const loginUrl = API_URL+"/users/login";
    return axios.post(loginUrl,{
        userName: username,
        password
    });
}