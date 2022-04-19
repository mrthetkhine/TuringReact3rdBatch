import React,{useState,useDebugValue,useLayoutEffect,useRef} from "react";
import Child from "./Child";

const useFetch=(url)=>{
    useDebugValue('Custom Label '+url);
};
const UseImperativeParent = () => {

    const childRef = useRef(null);
    useFetch('https://jsonplaceholder.typicode.com/todos/1');
    const handleOpenModal = (value) => {
        childRef.current.openChildModal(value);
    }
    useLayoutEffect(()=>{
       console.log('Use layout effect');
    });
    console.log('Parent re-render');

    return (
        <div>
            <p>This is a parent component</p>
            <Child ref={childRef}/>

            <button
                className={"btn btn-primary"}
                onClick={() => handleOpenModal(true)}>Open modal</button>
        </div>
    )

}

export default UseImperativeParent;