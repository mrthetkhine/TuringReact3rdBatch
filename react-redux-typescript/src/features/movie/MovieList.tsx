import MovieUI from "./MovieUI";
import {Movie} from "./movieSlice";

export default function MovieList(props:any) {
    const {movies} = props;
    console.log('Movie List ',movies);
    return (<div>
        Movie List
        {
            movies.map((movie:Movie)=> <MovieUI
                    key={movie._id}
                    movie={movie}></MovieUI>
            )
        }
    </div>);
}