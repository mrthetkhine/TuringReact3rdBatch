import  { useState } from 'react';
import {
    addToDo,
    selectTodo
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
    return (<div>
        To Do
        {
            todos.map( item=>{
                return <div key={item.id}>
                    {item.text}
                </div>
            })
        }
    </div>);
}