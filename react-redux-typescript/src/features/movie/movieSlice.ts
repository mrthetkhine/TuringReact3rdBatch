import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {ToDo, ToDoList} from "../todos/todoSlice";
import {deleteMovie, getAllMovie, saveMovie, updateMovie} from "./movieApi";

export interface Movie {
    _id? : string,
    title: string,
    year: number,
};
export interface MovieList {
    movies: Array<Movie>
}

const initialState: MovieList = {
    movies : [
        {
            _id : "1",
            title : "Movie 1",
            year: 2018
        }
    ]
};
export const apiGetAllMovie = createAsyncThunk(
    'movie/getAllMovie',
    async () => {
        console.log("API get all movie");
        const response = await getAllMovie();

        console.log("All movie json ",response.data);
        return response.data;
    }
);
export const apiSaveMovie = createAsyncThunk(
    'movie/saveMovie',
    async (movie:Movie) => {
        console.log("API save  movie");
        const response = await saveMovie(movie);

        console.log("save movie json ",response.data);
        return response.data;
    }
);
export const apiUpdateMovie = createAsyncThunk(
    'movie/updateMovie',
    async (movie:Movie) => {
        console.log("API update  movie");
        const response = await updateMovie(movie);

        console.log("Update movie json ",response.data);
        return response.data;
    }
);
export const apiDeleteMovie = createAsyncThunk(
    'movie/DeleteMovie',
    async (movie:Movie) => {
        console.log("API delete  movie");
        const response = await deleteMovie(movie);

        console.log("Delete movie json ",response.data);
        return response.data;
    }
);
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<ToDo>) => {
            //state.items = [...state.items, action.payload];
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllMovie.fulfilled, (state, action) => {
                console.log("Api fullfilled ", action.payload);
                state.movies = action.payload;

            })
            .addCase(apiSaveMovie.fulfilled, (state, action) => {
                console.log("Api save movie fulfilled ", action.payload);
                state.movies = [...state.movies, action.payload];

            })
            .addCase(apiUpdateMovie.fulfilled, (state, action) => {
                console.log("Api Update movie fulfilled ", action.payload);
                state.movies = state.movies.map(movie=>
                    movie._id==action.payload._id?
                    action.payload : movie);

            })
            .addCase(apiDeleteMovie.fulfilled, (state, action) => {
                console.log("Api delete movie fulfilled ", action.payload);
                state.movies = state.movies.filter(movie=>movie._id!= action.payload._id);

        });
    }
});

export const { addMovie } = movieSlice.actions;
export const selectMovie = (state: RootState) => state.movie.movies;
export const selectMovieById =  (state: RootState,movieId:string) => state.movie.movies.filter(movie=>movie._id ==movieId)[0];
export default movieSlice.reducer;