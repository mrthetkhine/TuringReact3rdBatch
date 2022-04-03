import React from "react";

function logProps(WrappedComponent)
{
    //console.log('Here ',WrappedComponent);
    return class extends React.Component
    {
        componentDidUpdate(prevProps) {
            console.log('Current props: ', this.props);
            console.log('Previous props: ', prevProps);
        }
        render() {
            console.log('Log props called ',this.props);
            return(<div>
                {
                    this.props.loading ? <div>Loading</div> :
                    <WrappedComponent {...this.props}/>
                }
                </div>)

        }
    }
}
export default logProps;