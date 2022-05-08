import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {ToDo, ToDoList} from "../todos/todoSlice";
import {getAllMovie, saveMovie} from "./movieApi";

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

            });
    }
});

export const { addMovie } = movieSlice.actions;
export const selectMovie = (state: RootState) => state.movie.movies;
export default movieSlice.reducer;