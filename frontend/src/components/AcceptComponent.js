function AcceptComponent(props) {
    //props.child = <div>Something</div>
    return(
        <div>
            <h1>
                Accept Component

            </h1>
            <div>
                Child
                {props.child}
            </div>
        </div>

    );
}
export default AcceptComponent;