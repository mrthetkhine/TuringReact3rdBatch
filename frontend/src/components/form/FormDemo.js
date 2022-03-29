import * as React from "react";
class FormDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            fruit:'',
        };
        this.handleChange = this.handleChange.bind(this);
        //this.fruitHandleChange = this.fruitHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
   /* fruitHandleChange(event) {
        this.setState({fruit: event.target.value});
    }*/
    handleSubmit(event)
    {
        console.log('Submit event ',this.state);
        event.preventDefault();
    }
    render() {
        console.log('Render');
        return (
            <div>
                Form
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Fruit:
                        <select value={this.state.fruit}
                                name={"fruit"}
                                onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <label>
                        Name:
                        <input type="text"
                               name="name"
                            value={this.state.name}
                            onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default FormDemo;