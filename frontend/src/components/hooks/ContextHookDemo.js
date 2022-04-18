import {useContext} from "react";
import MyContext from "./../context/MyContext";
const ContextHookDemo=()=>{
    const myContext = useContext(MyContext);
    console.log('MyContext ',myContext);
    return (
        <div>
            Context Hook Demo
            <h1>{myContext.data}</h1>
        </div>
    );
}
export default ContextHookDemo;