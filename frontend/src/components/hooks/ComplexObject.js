import React,{useState,useEffect} from "react";
const someFun=()=>{
    //let [toDo,setToDo] = useState('');
}
const ComplexObject = (props)=>{

    let [toDo,setToDo] = useState('');
    let [items,setItem] = useState(['One']);
    let count =0;
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count++} times`;
        console.log('Use effect called');

        let cleanUp = ()=>{
            console.log("Clean up function");
        };
        return cleanUp;
    });
    /*
    useEffect(() => {
        // Update the document title using the browser API

        console.log('Use effect2 called');
    });

     */
    let addToDo = ()=>{
        setItem([...items,toDo]);
        setToDo('');
        ////let [something,setSomeThing] = useState('');
    }
    console.log('Render');
    return (<div>
        <form>
            <label>
                To Do
                <input type={"text"} value={toDo} onChange={(event)=>{
                    setToDo(event.target.value);
                }} />
            </label>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={addToDo}>Add</button>
        </form>

        <ol>
        {
            items.map((item,index)=>{
                return <li key={index}>
                    {item}
                </li>
            })
        }
        </ol>

    </div>);
}
export default ComplexObject;