import React from 'react';

const Input = (props) => {
    return (
        <input
            className="form-control"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={event => props.change(event)}
            value={props.value} 
            required={props.required}
            min={props.min}
            step={props.step}
            />
    );
}

export default Input;