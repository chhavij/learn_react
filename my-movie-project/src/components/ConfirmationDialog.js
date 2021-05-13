import React from 'react'

function ConfirmationDialog(props) {
    return (
        <div className="modal" style={{display: "block"}}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background:props.item.color}}>
                    <div className="modal-body">
                        <p>Movie {props.item.name} has been added to your playlist.</p>
                    </div>
                    <div className="modal-footer">
                        <p>"My favorite color is {props.item.color}"</p>
                        <button onClick={props.item.onClick}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ConfirmationDialog