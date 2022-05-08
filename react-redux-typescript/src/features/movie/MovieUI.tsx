import {Movie} from "./movieSlice";
import "./Movie.css";
export default function MovieUI(props:any) {
    const movie:Movie = props.movie;
    return (<div className={'movie'}>
        <div className={'movie-title'}>
             { movie.title}
        </div>
        <div>
            Year {movie.year}
        </div>

    </div>)
};