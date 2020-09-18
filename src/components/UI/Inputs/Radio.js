import React from 'react';

const Radio = (props) => {
    return (
        <div className={props.class}>
            <input 
                className="form-check-input" 
                type="radio" 
                name={props.name} 
                onChange={event => props.change(event)}
                value={props.value} />
            <label className="form-check-label">
                {props.label}
            </label>

        </div>
    );
}

export default Radio;