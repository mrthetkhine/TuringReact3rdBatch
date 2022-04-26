import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        items: [{
            text: 'One',
            id : 1,
        }, {
            text:'Two',
            id : 3,
        }],
    },
    reducers: {
        addToDo: (state,action) => {
            state.items = [...state.items,action.payload];
        },
        removeToDo: (state,action) => {
            state.items = state.items.filter(item=> item.id != action.payload.id);
        },
        updateToDo:(state,action) => {
            const {id,text} = action.payload;
            let existingToDo  =state.items.find(item=>item.id==id);
            if(existingToDo)
            {
                existingToDo.text = text;
            }

        },
    },
})

// Action creators are generated for each case reducer function
export const { addToDo, removeToDo,updateToDo } = toDoSlice.actions;

export default toDoSlice.reducer;