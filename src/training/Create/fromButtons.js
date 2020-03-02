import React from 'react';

class FormButtons extends React.Component{
    render(){
        return(
            <div>
                <button className="btn btn-primary" 
                 onClick={this.props.handleButtons}>{this.props.btnName}</button>
                <button className="btn btn-primary" 
                 onClick={this.props.handleClose}>Close</button>
            </div>
        )
    }
}
export default FormButtons;