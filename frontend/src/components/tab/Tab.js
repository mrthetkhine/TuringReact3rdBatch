import * as React from "react";
import './Tab.css';
import * as PropTypes from "prop-types";


class TabHeader extends React.Component {
    render() {
        console.log('TabHeader render');
        return (<span
            className={"tab-header"}
            onClick={this.props.headerClick}>
            {this.props.header}
        </span>);
    }
}

TabHeader.propTypes = {
    onClick: PropTypes.func,
    header: PropTypes.any
};
export class TabBody extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        console.log('Tab Body');
        return (
            <div className={"tab-body"}>
                {this.props.children}
            </div>);
    }
}

class Tab extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex : 0
        };
    }
    headerClick(index)
    {
        this.setState({
            activeTabIndex : index
        })
    }
    render() {
        console.log('Tab render');
        return (
            <div>
                <div>
                    {this.props.headers.map( (header,index)=>{
                        return (
                            <TabHeader key={index}
                                       headerClick={() => this.headerClick(index)}
                                       header={header}/>
                        );
                    })}
                </div>
                <TabBody>
                    {this.props.children[this.state.activeTabIndex]}
                </TabBody>
            </div>
        );
    }
}

export default Tab;