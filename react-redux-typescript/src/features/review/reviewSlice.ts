import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {
    apiDeleteMovie,
    apiGetAllMovie,
    apiSaveMovie,
    apiUpdateMovie,
    Movie,
    MovieList,
    movieSlice
} from "../movie/movieSlice";
import {ToDo} from "../todos/todoSlice";
import {getAllMovie} from "../movie/movieApi";
import {getAllReviewByMovieId} from "./reviewApi";
import {incrementByAmount, selectCount} from "../counter/counterSlice";

export interface Review {
    _id? : string,
    rating: number,
    review: string,
    movie: Movie,
};
export interface ReviewList {
    reviews: Array<Review>
};

const initialState: ReviewList = {
    reviews : [
       /* {
            _id : "1",
            rating :5,
            review: "Good Movie",
            movie : {
                _id:"622f39a0b0b080b80fcb1083",
                title:"Some Movie",
                year:2009,
            }
        }*/
    ]
};
export const apiGetAllReviewByMovieId = createAsyncThunk(
    'review/getAllReviewByMovieId',
    async (movieId:string) => {
        console.log("API get all review");
        const response = await getAllReviewByMovieId(movieId);

        console.log("All review json ",response.data);
        return response.data;
    }
);
export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        addReview: (state, action: PayloadAction<ToDo>) => {
            //state.items = [...state.items, action.payload];
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllReviewByMovieId.fulfilled, (state, action) => {
                console.log("Api apiGetAllReviewByMovieId fullfilled ", action.payload);
                state.reviews = [...action.payload];

            });

    }
});
export const { addReview } = reviewSlice.actions;
export const selectReviewMovieById =  (state: RootState,movieId:string) => state.review.reviews.filter(review=>review.movie._id ==movieId);
export const apiGetAllReviewByMovieIfNotLoaded =
    (movieId: string): AppThunk =>
        (dispatch, getState) => {

            const reviews = selectReviewMovieById(getState(),movieId);
            console.log('Review length ',reviews);
            if (reviews.length === 0) {
                dispatch(apiGetAllReviewByMovieId(movieId));
            }
        };
export default reviewSlice.reducer;