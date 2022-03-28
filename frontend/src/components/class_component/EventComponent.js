import * as React from "react";
class EventComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.divClick = this.divClick.bind(this);
    }
    onClickHandler(e)
    {
        console.log("Click ",e);
    }
    divClick()
    {
        console.log('Div Clicked ',this);
    }
    render() {
        return(
            <div>
                <button type={"button"} onClick={(e)=>this.onClickHandler(e)}>
                    Click
                </button>
               {/* <div onClick={this.divClick.bind(this)}>
                    Hello
                </div>*/}
                <div onClick={this.divClick}>
                    Hello
                </div>
            </div>
        );

    }
}
export default EventComponent;