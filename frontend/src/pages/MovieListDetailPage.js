import React from "react";
import {useParams} from "react-router-dom";

const MovieListDetailPage = ()=>{
    console.log('Movie list Detail');
    let params = useParams();
    return(<div>
        <h1> Movie List Detail Page id {params.movieId}</h1>
    </div>)
};
export default MovieListDetailPage;