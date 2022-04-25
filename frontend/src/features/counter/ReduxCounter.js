import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from './counterSlice';
export default function ReduxCounter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    console.log('Action increment',increment());
    return (<div>

        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>dispatch(increment())}>
            +
        </button>
        <h1> Redux Counter {counter.value}</h1>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>dispatch(decrement())}>
            -
        </button>
    </div>);
}