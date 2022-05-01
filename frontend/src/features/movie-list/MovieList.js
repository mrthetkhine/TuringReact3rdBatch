import * as PropTypes from "prop-types";
import './MoviePreview.css';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getAllMovie} from "./movieApi";
import {useSelector} from "react-redux";
import {selectMovieById} from './movieSlice';
function MoviePreview(props) {
    let navigate = useNavigate();
    const movie = props.movie;

    const btnDetailClick =()=>{
        console.log('Movie ',movie);
        navigate(`/movie-list/${movie._id}`);
    };
    return <div className={"movie-preview"}>
        <div className={"movie-preview-title"}>
            {movie.title}
        </div>
        <div>Year {movie.year}</div>
        <button className={"btn btn-primary"}
            onClick={btnDetailClick}>
            Details
        </button>
    </div>;
}

MoviePreview.propTypes = {movie: PropTypes.any};
const MovieList = (props)=>{

    /*const movieList =[
        {
            "_id": "622f39a0b0b080b80fcb1083",
            "title": "The Dark Knight",
            "year": 2008
        },
        {
            "_id": "622f3a4ab0b080b80fcb1084",
            "title": "Titanic",
            "year": 1997
        }];*/
    const movie = useSelector((state) => state.movie);
    const movieList = movie.movies;
    console.log('Movie list ',movieList);
    return (<div>
        <nav>
            {
                movieList.map(movie=>
                    <MoviePreview key={movie._id} movie={movie}/>)
            };
        </nav>

    </div>)
}
export default MovieList;