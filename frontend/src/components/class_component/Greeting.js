import * as React from "react";

class User extends React.Component
{
    render() {
        return (
            <h1>
               User
            </h1>
        );
    }
}
class Admin extends React.Component
{
    render() {
        return (
            <h1>
                Admin
            </h1>
        );
    }
}
class Greeting extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        let c = <User/>;
        if(this.props.isAdmin)
        {
            c = <Admin/>;
        }

        return (
            <div>
                Greeting
                {c}
                {this.props.isAdmin?"Admin User":"Normal User"}
                {this.props.isAdmin? <Admin/> : <User/>}
            </div>
        );
    }
}
export default Greeting;