import React, { useImperativeHandle, useState } from 'react';

const UseIdDemo = ()=>{

    //const id = useId();
    const id = "Some";
    return (<div key={id}>
        Something
    </div>)
}
export default UseIdDemo;