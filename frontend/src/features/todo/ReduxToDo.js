import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {addToDo,removeToDo,updateToDo} from "./toDoSlice";

let id = 2;
const getNextId=()=>{
    return id++;
}
export default function ReduxToDo() {
    const toDo = useSelector((state) => state.toDo);
    const dispatch = useDispatch();

    const [item,setItem] = useState('');

    const btnAddHandler = ()=>{
        let payload = {
            id: getNextId(),
            text :item,
        }
        dispatch(addToDo(payload));
        setItem('');
    };
    const btnRemoveHandler = (item)=>{
        dispatch(removeToDo(item));
    };
    const btnUpdateHandler = (toDoItem)=>{
        const updateItem = {...toDoItem, text: item};
        dispatch(updateToDo(updateItem));
        setItem('');
    }
    return (<div>
        <h1>To Do Items</h1>
        <form className={"container"}>
            <div className={"row"}>
                <input type={"text"}
                       value={item}
                       onChange={(event)=>setItem(event.target.value)}
                       className={"form col-5"}/>
                <button type={"button"}
                        className={"btn btn-primary col-2"}
                        onClick={btnAddHandler}>
                    Add
                </button>
            </div>

        </form>
        <ul>


        {
            toDo.items.map((item)=>{
                return <li key={item.id}>
                        {item.text}
                    <button type={"button"}
                            className={"btn btn-primary"}
                            onClick={()=>btnRemoveHandler(item)}>
                        Remove
                    </button>
                    <button type={"button"}
                            className={"btn btn-primary"}
                            onClick={()=>btnUpdateHandler(item)}>
                        Update
                    </button>
                </li>
            })
        }
            </ul>
    </div>);
};