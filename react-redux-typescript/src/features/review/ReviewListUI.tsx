import {apiGetAllReviewByMovieIfNotLoaded, Review, selectReview, selectReviewMovieById} from "./reviewSlice";
import ReviewUI from "./ReviewUI";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";
import {shallowEqual} from 'react-redux';
export default function ReviewListUI(props:any) {
    console.log('Review list render');
    let {movie} = props;
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllReviewByMovieIfNotLoaded(movie._id!));
    },[]);
    const allReview = useAppSelector(selectReview );
    const reviews = selectReviewMovieById(allReview,movie._id!);
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