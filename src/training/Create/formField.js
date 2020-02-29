import React from 'react';

class Formfield extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label><b>{this.props.nameOfField}</b></label>
                <input className="form-control formfield" 
                    type={this.props.fieldType} 
                    name={this.props.fieldname}
                    defaultValue={this.props.defaultValue}
                    values={this.props.fieldValue} 
                    onChange={this.props.handleChange}/>
            </div>
        )
    }
}
export default Formfield;