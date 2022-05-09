import {Movie} from "./movieSlice";
import "./Movie.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
export default function MovieUI(props:any) {

    let navigate = useNavigate();

    const movie:Movie = props.movie;
    const btnEditClickHandler=()=>{
        props.editClick(movie);
    };
    const btnDetailHandler=()=>{
        console.log('Go to detail');

        navigate(`/movie-details/${movie._id}`);
    };
    return (<div className={'movie'}>
        <div className={'movie-title'}>
             { movie.title}
        </div>
        <div>
            Year {movie.year} &nbsp;
            <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnEditClickHandler}>
                Edit
            </button>
            &nbsp;
            &nbsp;
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={()=>props.deleteClick(movie)}>
                Delete
            </button>
            &nbsp;
            &nbsp;
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnDetailHandler}>
                Details
            </button>
        </div>

    </div>)
};