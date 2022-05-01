import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {getAllMovie} from "./movieApi";

export const apiGetAllMovie = createAsyncThunk(
    'movies/getAllMovie',
    async () => {
        console.log("API get all movie");
        const response = await getAllMovie();

        console.log("All movie json ",response.data);
        return response.data;
    }
);
export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies:[]
    },
    reducers: {

    },
    extraReducers:(builder )=>  {
        builder
            .addCase(apiGetAllMovie.fulfilled, (state, action)=> {
                console.log("Api fullfilled ",action.payload);
                state.movies = action.payload;

            })
    }
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = movieSlice.actions
export const selectMovieById =  (state,movieId) => state.movie.movies.filter(movie=>movie._id ==movieId)[0];
export default movieSlice.reducer;