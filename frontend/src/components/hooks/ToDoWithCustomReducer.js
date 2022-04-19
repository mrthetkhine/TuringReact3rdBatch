import React,{useState,useCallback} from "react";
const initialState = {
    counter : 1,
};
function reducer(state, action) {
    console.log('State ',state, " Action ",action);
    switch (action.type) {
        case 'inc':
            return { counter : state.counter +1};
        case 'dec':
            return {counter : state.counter-1};
        default:
            throw new Error("no action");
    }
    return state;
}
function useCustomReducer (reducer,initState){
    let [state,setState] = useState(initState);

    let dispatch=(action) => {
        let nextState = reducer(state,action);
        setState(nextState);
    }
    return [state,dispatch];
}
const ToDoWithCustomReducer = ()=>{
    let [toDo,setToDo] = useState('');
    const [state, dispatch] = useCustomReducer(reducer, initialState);


    return (<div>
        <form>
           <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>dispatch({type:'inc'})}>
               Inc
           </button>
           <h1>{state.counter}</h1>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={()=>dispatch({type:'dec'})}>
                Dec
            </button>
        </form>



    </div>);
};
export default ToDoWithCustomReducer;