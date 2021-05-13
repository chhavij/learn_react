import React from 'react'

function Message(props) {
    return (
        <div className="row">
            <div className="col">
                <div className="content-display">
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Message