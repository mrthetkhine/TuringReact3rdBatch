import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {counterSlice, CounterState} from "../counter/counterSlice";
import {startTrackValue} from "@testing-library/user-event/dist/types/document";

export interface ToDo {
    id : number,
    text: string;
};
export interface ToDoList {
    items: Array<ToDo>
}
const initialState: ToDoList = {
    items : [
        {
            id : 1,
            text : "Task 1",
        }
    ]
};
export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<ToDo>) => {
            state.items = [...state.items, action.payload];
        },

    },
});

export const { addToDo } = toDoSlice.actions;
export const selectTodo = (state: RootState) => state.todo.items;
export default toDoSlice.reducer;