import { useParams } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectMovieById} from "../features/movie/movieSlice";
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
    let {movieId} = useParams();

    const movie = useAppSelector(state=>selectMovieById(state,movieId!));
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
                <ReviewListUI movieId={movieId}/>
            </div>
    </div>)
}