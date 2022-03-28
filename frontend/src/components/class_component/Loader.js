import * as React from "react";

class Loader extends React.Component
{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('Component did mount');
    }

    render() {

        if(this.props.data)
        {
            return(
                <div>
                   Loader {this.props.data}
                </div>
            );

        }
        else
        {
            return null;
        }
    }
}
export default Loader;