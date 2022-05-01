import ReactStars from "react-rating-stars-component";

import "./MovieReview.css";
const MovieReview = ({movieReview})=>{
    console.log("Review ",movieReview);
    return (
        <div className={"movie-review"}>
            <div className={"star"}>
                <ReactStars
                    count={5}
                    value ={movieReview.rating}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                />
            </div>

            <div>Review {movieReview.review} </div>
        </div>)
};
export default MovieReview;