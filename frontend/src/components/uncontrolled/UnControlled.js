import React  from "react";

class UnControlled extends React.Component
{
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event)
    {
        console.log('Name ',this.input.current.value);
        event.preventDefault();
    }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type={"text"} ref={this.input}/>
                </label>
                <button type={"submit"}>Submit</button>
            </form>
        </div>);
    }
}
export default UnControlled;