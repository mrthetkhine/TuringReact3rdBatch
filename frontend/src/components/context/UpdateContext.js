import React from "react";
import MyContext from "./MyContext";
import ParentComponent from "./ParentComponent";
class UpdateContext extends React.Component{
    constructor(props) {
        super(props);
        this.changeData =()=> {
            this.setState({
                data : 'New update title'
            });
        };
        this.state = {
            data: 'New Default title'
        };
    }
    render() {
        return <div>
            <MyContext.Provider value={this.state}>
                <ParentComponent updateContext={this.changeData}/>
            </MyContext.Provider>
        </div>
    }
}
export default UpdateContext;