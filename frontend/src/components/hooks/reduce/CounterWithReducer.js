import React, {useState,useReducer} from "react";
const initialState = {count: 0};
function init(data) {
    console.log('Data ',data);
    return {count: data};
}
function reducer(state, action) {
    console.log('State ',state, " Action ",action);
    switch (action.type) {
        case 'reset':
            return {count: action.payload};
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

const CounterWithReducer = ({initialCount})=>{
    //const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(reducer, initialCount,init);
    return (
        <div>
            <button className={"btn btn-primary"}
                    onClick={()=>dispatch({
                        type:'reset',payload:initialCount
                    })}>
                Reset
            </button>
            <button className={"btn btn-primary"}
                    onClick={()=>dispatch({type:'increment'})}>
                +
            </button>
            <span> {state.count} </span>
            <button className={"btn btn-primary"}
                    onClick={()=>dispatch({type:'decrement'})}>
                -
            </button>
        </div>
    );
};
export default CounterWithReducer;