import React  from "react";

export class Cat extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        let mouse =this.props.mouse;
        return (
            <div>
                <div>x is { mouse.x}</div>
                <div>y is { mouse.y}</div>
            </div>
        );
    }
}
class MouseTracker extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            x :0,
            y: 0,
        };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    handleMouseMove(event)
    {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    render() {
        return ( <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
            {/*<h3>x { this.state.x +", "+this.state.y}</h3>*/}
            {this.props.render(this.state)}
        </div>);
    }
}
export default MouseTracker;