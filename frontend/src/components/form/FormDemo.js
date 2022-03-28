import * as React from "react";
class FormDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            value:''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        console.log('Render');
        return (
            <div>
                Form
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"
                            value={this.state.value}
                            onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default FormDemo;