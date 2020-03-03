import React from 'react';

export default function FormField(props){
    return(
        <div className="form-group">
            <label>
                <b>{props.nameOfField}</b>
            </label>
            <input 
                className="form-control formfield" 
                type={props.fieldType} 
                name={props.fieldname}
                defaultValue={props.defaultValue}
                values={props.fieldValue} 
                onChange={props.handleChange}
            />
        </div>
    )
}
