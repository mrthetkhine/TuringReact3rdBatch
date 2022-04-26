import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import toDoReducer from '../features/todo/toDoSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        toDo: toDoReducer,
    },
})