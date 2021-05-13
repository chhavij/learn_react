import React from 'react'

function ConfirmationDialog(props) {
    return (
        
        <div className="modal confirm-modal">
            <div className="modal-dialog">
                <div className="modal-content confirm-model-content">
                <div className="modal-header">
                    <h5 className="modal-title">Confirmation</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.item.onClick}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Movie has been added to playlist</p>
                    </div>
                    <div className="modal-footer">
                        <p>"My favorite color is {props.item.color}"</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ConfirmationDialog