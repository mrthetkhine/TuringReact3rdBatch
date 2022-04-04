import React  from "react";
import PropTypes from 'prop-types';

class DefaultProperty extends React.Component
{
    constructor(props) {
        super(props);

    }
    render() {
        console.log('This.props ',this.props);
        return (<div>
            <h3>{this.props.title}</h3>
        </div>);
    }
}
DefaultProperty.defaultProps ={
    title:'Default Title'
};
DefaultProperty.propTypes ={
    title: PropTypes.string,
    value : PropTypes.number.isRequired,
}
export default DefaultProperty;