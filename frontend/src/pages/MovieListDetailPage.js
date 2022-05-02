import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {selectMovieById} from "../features/movie-list/movieSlice";
import MovieDetails from "../features/movie-list/MovieDetails";
import {apiGetReviewByMovieId, selectReviewByMovieById} from "../features/review/reviewSlice";

const MovieListDetailPage = ()=>{
    console.log('Movie list Detail');

    let dispatch = useDispatch();
    let params = useParams();
    const movie = useSelector(state=>selectMovieById(state,params.movieId));
    const reviews = useSelector(state=>selectReviewByMovieById(state,movie._id));
    console.log('Movie Data from redux ',movie);
    useEffect(()=>{
        dispatch(apiGetReviewByMovieId(movie._id));
    },[]);
    return(<div>
        <MovieDetails movie={movie}
                      reviews={reviews} />
    </div>)
};
export default MovieListDetailPage;