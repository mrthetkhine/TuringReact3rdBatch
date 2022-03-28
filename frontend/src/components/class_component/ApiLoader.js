import * as React from "react";
import LabelComponent from "./LabelComponent";

class ApiLoader extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        console.log('Component Did mount');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({
                data : json
            }))
    }
    render() {
        console.log("API Loader render");
        return(
            <div>

                <h1>{this.state.data?this.state.data.title:'Loading'}</h1>
                {
                    this.state.data &&
                    <LabelComponent text={this.state.data.title}></LabelComponent>}
            </div>
        )
    }
}
export default ApiLoader;