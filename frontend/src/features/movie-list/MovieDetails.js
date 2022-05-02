import {useEffect, useState} from "react";
import "./MovieDetail.css";
import {useDispatch, useSelector,shallowEqual} from "react-redux";

import {Button, Modal} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

import {getAllReviewByMovieId,saveReview} from "../review/reviewApi";

import MovieReview from "./MovieReview";
import {apiSaveReview, selectReviewByMovieById} from "../review/reviewSlice";

const MovieDetails = ({movie,reviews})=>{

    console.log('Movie Reviews ',reviews);
    const dispatch = useDispatch();
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    const btnSaveReview = ()=>{
        console.log('Rating ',rating, ' Review ',review);
        let reviewJson = {
            movie:movie._id,
            rating ,
            review
        }
        //saveReview(reviewJson).then(data=>console.log('Review save ',data));
        dispatch(apiSaveReview(reviewJson));
        handleClose();
    };
    return (
        <div className={"movie-details"}>
            <div className={"movie-details-title"}>
                Title {movie.title}
                &nbsp;
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={handleShow}>
                    Add review
                </button>
            </div>
            <div>Year {movie.year}</div>
            {
                reviews.map(review=><MovieReview movieReview={review} key={review._id}/>)
            }
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactStars
                        count={5}
                        value ={rating}
                        size={24}
                        activeColor="#ffd700"
                        onChange={ratingChanged}
                    />
                    Review <textarea
                            cols={50}
                           value={review}
                           onChange={(event)=> setReview(event.target.value)}
                        />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={btnSaveReview}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default MovieDetails;