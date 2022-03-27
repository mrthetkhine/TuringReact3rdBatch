
function Hello(props) {
    console.log('Hello',props);
    let user = props.user;
    let isAdmin = props.isAdmin;
    return (
        <div>
            Hello Component
            {user.name}
            {isAdmin?"Admin":"User"}

            <h1>Children</h1>
            {props.children}
        </div>
    );
}
export default Hello;