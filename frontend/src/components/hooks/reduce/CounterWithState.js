import React, {useState} from "react";
const CounterWithState= ()=>{
    let [count,setCount] = useState(1);
    return (
        <div>
            <button className={"btn btn-primary"}
                    onClick={()=>setCount(count+1)}>
                +
            </button>
            <span> {count} </span>
            <button className={"btn btn-primary"}
                    onClick={()=>setCount(count-1)}>
                -
            </button>
        </div>
    );
};
export default CounterWithState;