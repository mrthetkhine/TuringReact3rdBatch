import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {getAllReviewByMovieId, saveReview} from './reviewApi';

export const apiGetReviewByMovieId = createAsyncThunk(
    'review/getReviewByMovieId',
    async (movieId) => {
        console.log("API get all movie review");
        const response = await getAllReviewByMovieId(movieId);

        console.log("All movie review json ",response.data);
        return response.data;
    }
);
export const apiSaveReview = createAsyncThunk(
    'review/saveReview',
    async (review) => {
        console.log("API SaveReview");
        const response = await saveReview(review);

        console.log("Save Review JSON ",response.data);
        return response.data;
    }
);
export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviews:[]
    },
    reducers: {

    },
    extraReducers:(builder )=>  {
        builder
            .addCase(apiGetReviewByMovieId.fulfilled, (state, action)=> {
                console.log("Api apiGetReviewByMovieId fullfilled ",action.payload);
                state.reviews = action.payload;

            })
            .addCase(apiSaveReview.fulfilled, (state, action)=> {
                console.log("Api apiSaveReview fullfilled ",action.payload);
                state.reviews = [...state.reviews,action.payload];

            })
    }
})


export const selectReviewByMovieById =  (state,movieId) => {
    //console.log('State ',state, 'Movie id ',movieId );
    return state.review.reviews.filter(review=>review.movie._id ==movieId);
}
export default reviewSlice.reducer;