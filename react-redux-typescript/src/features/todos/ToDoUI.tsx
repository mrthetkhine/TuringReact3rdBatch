import  { useState } from 'react';
import {
    addToDo,
    selectTodo,
    ToDo
} from './todoSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

let id = 2;
function uuid():number{
    id ++;
    return id;
}
export default function ToDoUI()
{
    const todos = useAppSelector(selectTodo);
    const dispatch = useAppDispatch();
    const btnAddToDoClick = ()=>{
        let id = uuid();
        let toDoItem: ToDo = {
            id : id,
            text : "Another task "+id
        };
        dispatch(addToDo(toDoItem));
    };
    return (<div>
        To Do
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnAddToDoClick}>
            Add To Do
        </button>
        {
            todos.map( item=>{
                return <div key={item.id}>
                    {item.text}
                </div>
            })
        }
    </div>);
}