import {Review} from "./reviewSlice";
import './Review.css';
export default function ReviewUI(props:any) {
    let {review} = props;
    return (<div className={'review'}>
        <div> Rating {review.rating}</div>
        <div> Review {review.review}</div>
    </div>);
}