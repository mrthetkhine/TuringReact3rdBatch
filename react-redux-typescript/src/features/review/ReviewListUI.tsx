import {apiGetAllReviewByMovieIfNotLoaded, Review, selectReviewMovieById} from "./reviewSlice";
import ReviewUI from "./ReviewUI";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";

export default function ReviewListUI(props:any) {
    let {movieId} = props;
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllReviewByMovieIfNotLoaded(movieId!));
    },[]);
    const reviews = useAppSelector(state => selectReviewMovieById(state,movieId!) );

    return(
        <div>
            {
                reviews.map((review:Review)=> <ReviewUI
                    key={review._id}
                    review={review}/>)
            }
        </div>
    );

}