import * as React from "react";

class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter : 1,
            text : "Hello"
        }
        console.log("Constructor");
    }


    componentWillUnmount() {
        console.log('Component will unmount');
    }
    incCount()
    {
     /* this.setState({
            counter : this.state.counter + this.props.inc
      });
        this.setState({
            counter : this.state.counter + this.props.inc
        },()=>{
            console.log('Change state ',this.state.counter);
        });*/
        this.setState((state,props)=>({
            counter : state.counter + props.inc
        })
        );
        this.setState((state,props)=>({
                counter : state.counter + props.inc
            })
        );
    }
    render() {
        console.log("Counter render");
        return(
            <div>
                <h1>Counter {this.state.counter}</h1>
                <h2> {this.state.text}</h2>
                <button type={"button"}
                        onClick={this.incCount.bind(this)}>+</button>

            </div>
        )
    }
}
export default Counter;