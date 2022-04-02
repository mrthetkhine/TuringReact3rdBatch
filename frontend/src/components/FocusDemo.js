import React from "react";

class FocusDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusInput = this.focusInput.bind(this);
    }
    focusInput()
    {
        this.textInput.current.focus();
    }
    render() {
        return (<div>
            <form>
                <input type={"text"}
                ref={this.textInput}
                />
                <button type={"button"}
                onClick={this.focusInput}>Focus</button>
            </form>
        </div>);
    }
}
export default FocusDemo;