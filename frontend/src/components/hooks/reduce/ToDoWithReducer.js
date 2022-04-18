import React,{useState,useReducer} from "react";
const initialState = {
    items : ['One'],
};
function reducer(state, action) {
    console.log('State ',state, " Action ",action);
    switch (action.type) {

        case 'addToDo':
            return { items: [...state.items,action.payload]};
        case 'deleteToDo':
            return { items: state.items.filter(item=> item!= action.payload)};
        default:
            throw new Error();
    }
    return state;
}
const ToDoWithReducer = ()=>{
    let [toDo,setToDo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    let addToDo = ()=>{
        dispatch({
            type:'addToDo',
            payload:toDo,
        });
        setToDo('');
    };
    let deleteToDo = (item)=>{
        dispatch({
            type:'deleteToDo',
            payload:item,
        });
    };
    let editClick = (item)=>{
        setToDo(item);
    }
    return (<div>
        <form>
            <label>
                To Do
                <input type={"text"}
                       value={toDo}
                       onChange={(event)=>{
                           setToDo(event.target.value);
                       }} />
            </label>
            <button type={"button"}
                    className={"btn btn-primary"}
                   onClick={addToDo}>Add</button>
        </form>

        <ol>
            {
                state.items.map((item,index)=>{
                    return <li key={index}>
                        {item}
                       
                        <button type={"button"}
                                className={"btn btn-primary"}
                                onClick={()=>deleteToDo(item)}>
                            Remove
                        </button>
                    </li>
                })
            }
        </ol>

    </div>);
};
export default ToDoWithReducer;