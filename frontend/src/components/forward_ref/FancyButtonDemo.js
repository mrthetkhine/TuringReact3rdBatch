import React from "react";

const FancyButton = React.forwardRef((props, ref) => {
    console.log('Ref ',ref);
    return (
        <button ref={ref} className="FancyButton btn btn-primary">
            {props.children}
        </button>
    );
});

class FancyButtonDemo extends React.Component
{
    render() {
        const ref = React.createRef();
        return (<div>
            <FancyButton ref={ref}>
                Click Me

            </FancyButton>
        </div>);
    }
}
export default FancyButtonDemo;