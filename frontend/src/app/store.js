import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import toDoReducer from '../features/todo/toDoSlice';
import movieReducer from '../features/movie-list/movieSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        toDo: toDoReducer,
        movie: movieReducer,
    },
})