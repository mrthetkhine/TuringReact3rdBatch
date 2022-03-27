import * as React from "react";

class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter : 1
        }
    }
    incCount()
    {
      this.setState({
            counter : this.state.counter +1
      });

    }
    render() {
        console.log("Counter render");
        return(
            <div>
                <h1>Counter {this.state.counter}</h1>

                <button type={"button"}
                        onClick={this.incCount.bind(this)}>+</button>
            </div>
        )
    }
}
export default Counter;