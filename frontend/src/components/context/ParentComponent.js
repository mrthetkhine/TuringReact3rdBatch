import React from "react";
import MyContext from "./MyContext";
class Child extends React.Component{
    render() {
        console.log('Chane data ',this.props.changeData);
        return (<div>
            <h1>Child {this.props.value}</h1>
            <SubChild/>
        </div>);
    }
}
class SubChild extends React.Component
{
    componentDidMount() {
        let value = this.context;
    }
    componentDidUpdate() {
        let value = this.context;
    }
    componentWillUnmount() {
        let value = this.context;
    }
    render() {
        let value = this.context;
        return (<div>
            <h1>Sub Child {value.data}</h1>
        </div>);
    }
}
SubChild.contextType = MyContext;
class ParentComponent extends React.Component
{
    render() {
        console.log('Update Context',this.props.updateContext);
        return (
            <div>
                Parent Component
                <MyContext.Consumer>
                    {
                        (value)=>{

                            return <Child
                                value={value.data}
                                updateContext = {value.changeData}
                            />
                        }
                    }
                </MyContext.Consumer>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={this.props.updateContext}>Change Context</button>
            </div>
        )
    }
}
export default ParentComponent;