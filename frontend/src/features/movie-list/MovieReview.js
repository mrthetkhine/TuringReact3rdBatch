import ReactStars from "react-rating-stars-component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faPencil } from '@fortawesome/free-solid-svg-icons'
import "./MovieReview.css";
import Swal from 'sweetalert2'
import {useDispatch} from "react-redux";
import {apiDeleteReview, apiUpdateReview} from "../review/reviewSlice";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

function deleteReview(dispatch, movieReview) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(apiDeleteReview(movieReview._id));
            /* Swal.fire(
                 'Deleted!',
                 'Your file has been deleted.',
                 'success'
             )*/
        }
    })
}

const MovieReview = ({movieReview})=>{
    const dispatch = useDispatch();
    console.log("Review ",movieReview);
    const btnDeleteClick = ()=>{
        console.log('Delete movie review ',movieReview);
        deleteReview(dispatch, movieReview);
    };

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const btnEditClick = ()=>{
        console.log('Edit Review ',movieReview);
        setRating(movieReview.rating);
        setReview(movieReview.review);
        handleShow();
    };
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    const btnUpdateReview = ()=>{
        console.log('Update Review ',movieReview);

        let reviewJson = {
            ...movieReview,
            rating,
            review
        };
        reviewJson.movie = reviewJson.movie._id;
        console.log('review ',reviewJson );
        dispatch(apiUpdateReview(reviewJson));
        handleClose();
    }
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

            <div>Review {movieReview.review}
            &nbsp;&nbsp;

            <FontAwesomeIcon className={"icon"}
                             onClick={btnEditClick}
                             icon={faPencil} />
                &nbsp;&nbsp;   &nbsp;&nbsp;
            <FontAwesomeIcon className={"icon"}
                             onClick={btnDeleteClick}
                             icon={faTrashCan} />
                &nbsp;&nbsp;
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Review</Modal.Title>
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
                    <Button variant="primary" onClick={btnUpdateReview}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>)
};
export default MovieReview;