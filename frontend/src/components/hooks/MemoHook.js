import React,{useState,useReducer,useMemo} from "react";
function factorialOf(n) {
    console.log('factorialOf(n) called!',n );
    let result = 1;
    for(let i=1 ; i<= n;i++)
    {
        result *= i;
    }
    return result;

}

const MemoHook = ()=>{
    console.log('Rerender');
    let [number,setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    let factorial = useMemo(()=>factorialOf(number),[number]);
    //let factorial = factorialOf(number);
    const onClick = () => setInc(i => i + 1);
    return (<div>
        Memo Hook

        <form>
            <input type={"text"}
                   value={number}
                   onChange={event=>setNumber(event.target.value)}
                   />

             Factorial { factorial}
            <button
                className={"btn btn-primary"}
                type={"button"}
                onClick={onClick}>Re-render</button>
        </form>
    </div>);
}
export default MemoHook;