import React, { forwardRef, useImperativeHandle, useState } from 'react';

function ChildComponent (props, ref) {
    console.log('Child re-render');
    const [openModal, setOpenModal] = useState(false);


    useImperativeHandle(ref, () => ({
        openChildModal: (value) => setOpenModal(value),
    }));

    if(!openModal) return null;

    return (
        <div>
            <p>This is a modal!</p>
            <button
                className={"btn btn-primary"}
                onClick={() => setOpenModal(false)}> Close </button>
        </div>
    )

}

export default forwardRef(ChildComponent);