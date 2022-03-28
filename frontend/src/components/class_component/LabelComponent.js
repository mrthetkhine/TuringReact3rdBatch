import * as React from "react";
class LabelComponent extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <h3 className={"App-header"}>
                Label    {this.props.text}
            </h3>
        );
    }
}
export default LabelComponent;