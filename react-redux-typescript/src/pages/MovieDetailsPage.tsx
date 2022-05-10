import { useParams } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {shallowEqual} from 'react-redux';
import {selectMovie, selectMovieById} from "../features/movie/movieSlice";
import {
    apiGetAllReviewByMovieId,
    apiGetAllReviewByMovieIfNotLoaded,
    Review,
    selectReviewMovieById
} from "../features/review/reviewSlice";
import ReviewUI from "../features/review/ReviewUI";
import {useEffect} from "react";
import ReviewListUI from "../features/review/ReviewListUI";

export default function MovieDetailsPage() {
    console.log('Movie detial render');
    let {movieId} = useParams();

    const movies = useAppSelector(selectMovie);
    const movie = selectMovieById(movies,movieId!);
   /* let movie = {
        title:'zero',
        year:23
    };*/
    console.log("Movie ",movie);
    return (
        <div>
            <div className={'movie'}>
                <div className={'movie-title'}>
                    { movie.title}
                </div>
                <div>
                    Year {movie.year} &nbsp;
                </div>
                <ReviewListUI movie={movie}/>
            </div>
    </div>)
}