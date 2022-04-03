import React from "react";

const MyContext = React.createContext({
    data: "Title",
    changeData :()=>{},
});
export default MyContext;