
import * as React from "react";

class ListItem extends  React.Component
{
    constructor(props) {
        super(props);
    }
    clickItem(index)
    {
        console.log("Click item ",index);
    }
    render() {
        return (
            <ol>
                {
                    this.props.data.map((item,index)=>{
                        return (
                            <li
                                key={index}
                                onClick={()=>this.clickItem(index)}>
                                {item}
                            </li>)

                    })
                }
            </ol>
        );
    }
}
export default ListItem;