import React,{useState} from "react";

const HookCounter= (props)=>{
    const [count, setCount] = useState(0);
    const [text,setText] = useState('Counter is');

    let inc = ()=>{
        console.log('Inc');
        setCount(count+1);
        /*
        this.setState({
            count : this.state.count +1
        })
        * */
    };
    let changeText = ()=>{
      setText('Counter text update');
    };
    return (<div>
        {text} {count} <br/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={inc}>Inc</button>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={changeText}>Change Text</button>
    </div>)
};
export default HookCounter;