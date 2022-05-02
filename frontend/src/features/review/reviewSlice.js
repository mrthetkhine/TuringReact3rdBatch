import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {deleteReview, getAllReviewByMovieId, saveReview, updateReview} from './reviewApi';

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
export const apiDeleteReview = createAsyncThunk(
    'review/deleteReview',
    async (reviewId) => {
        console.log("API deleteReview");
        const response = await deleteReview(reviewId);

        console.log("Delete Review JSON ",response);
        if(response.status ==200)
        {
            return {
                _id:reviewId
            };
        }
        else return response.data;
    }
);
export const apiUpdateReview = createAsyncThunk(
    'review/updateReview',
    async (review) => {
        console.log("API update review ",review);
        const response = await updateReview(review._id,review);

        console.log("Update Review JSON ",response);
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
            .addCase(apiDeleteReview.fulfilled, (state, action)=> {
                console.log("Api apiDeleteReview fullfilled ",action.payload);
                state.reviews = state.reviews.filter(review=>review._id != action.payload._id);

            })
            .addCase(apiUpdateReview.fulfilled, (state, action)=> {
                console.log("Api apiUpdateReview fullfilled ",action.payload);
                state.reviews = state.reviews.map( review=>
                        review._id == action.payload._id? action.payload : review
                );

            })
    }
})


export const selectReviewByMovieById =  (state,movieId) => {
    console.log('State ',state, 'Movie id ',movieId );
    return state.review.reviews.filter(review=>review.movie._id ==movieId);
}
export default reviewSlice.reducer;