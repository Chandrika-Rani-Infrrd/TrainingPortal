import React from 'react';

export default function FormButtons(props){
    return(
        <div>
            <button className="btn btn-primary" onClick={props.handleButtons}>           
                {props.btnName}
            </button>              
            <button className="btn btn-primary" onClick={props.handleClose}>
                Close
            </button>
        </div>
        )
}
