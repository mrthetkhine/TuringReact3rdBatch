
import React,{Fragment} from "react";

const TableRow= (props)=>{
    return (

        <>
            {/* <Fragment>*/}
                <tr>
                    One
                </tr>
                <tr>
                    Two
                </tr>
            {/* </Fragment>*/}
           </>


    )
}
class FragmentDemo extends React.Component
{
    render() {
        return(
            <table>
                <TableRow/>
            </table>
        );
    }
}
export  default FragmentDemo;