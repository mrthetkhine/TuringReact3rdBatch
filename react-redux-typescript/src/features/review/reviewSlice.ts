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
import {number} from "yup";

export interface Review {
    _id? : string,
    rating: number,
    review: string,
    movie: Movie,
};
export interface ReviewList {
    reviewLoadedMovieIds:Array<string>,
    reviews: Array<Review>
};

const initialState: ReviewList = {
    reviewLoadedMovieIds: [],
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
        addReviewLoadedMovie(state,action:PayloadAction<string>)
        {
            state.reviewLoadedMovieIds.push(action.payload);
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllReviewByMovieId.fulfilled, (state, action) => {
                console.log("Api apiGetAllReviewByMovieId fullfilled ", action.payload);
                state.reviews = [...state.reviews,...action.payload];

            });

    }
});
export const { addReview,addReviewLoadedMovie } = reviewSlice.actions;
export const selectReview = (state: RootState)=>state.review.reviews;
export const selectReviewMovieById =  (reviews:Array<Review>,movieId:string) => reviews.filter(review=>review.movie._id ==movieId);
export const apiGetAllReviewByMovieIfNotLoaded =
    (movieId: string): AppThunk =>
        (dispatch, getState) => {

            const reviewLoaded = getState().review.reviewLoadedMovieIds.indexOf(movieId)!=-1;
            console.log('Review reviewLoaded ',reviewLoaded);
            if (!reviewLoaded) {
                dispatch(addReviewLoadedMovie(movieId));
                dispatch(apiGetAllReviewByMovieId(movieId));
            }
        };
export default reviewSlice.reducer;