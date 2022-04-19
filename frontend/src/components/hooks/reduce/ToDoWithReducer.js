import React,{useState,useReducer,useCallback} from "react";
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
        case 'updateToDo':
            return { items: state.items.map(
                                        (item,index)=> index== action.payload.index?
                                                        action.payload.item:item)
            };
        default:
            throw new Error();
    }
    return state;
}
let factoryCache ;
const ToDoWithReducer = ()=>{
    let [toDo,setToDo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    let factory = useCallback(()=>{
        console.log('Todo ',toDo);
        return toDo;
    },[toDo]);

    console.log('Factory ',factory == factoryCache);
    factoryCache = factory;
    let addToDo = ()=>{
        dispatch({
            type:'addToDo',
            payload:toDo,
        });
        //setToDo('');
    };
    let deleteToDo = (item)=>{
        dispatch({
            type:'deleteToDo',
            payload:item,
        });
    };
    let updateToDo = (index)=>{
        dispatch({
            type:'updateToDo',
            payload: {
                item:toDo,
                index
            },
        });
        setToDo('');
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
                                onClick={()=>updateToDo(index)}>
                            Update
                        </button>
                        &nbsp;
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