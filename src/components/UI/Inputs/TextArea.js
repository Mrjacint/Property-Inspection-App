import React from 'react';

const TextArea = (props) => {
    return (
        <textarea
            className="form-control"
            type={props.text}
            name={props.name}
            placeholder={props.placeholder}
            onChange={event => props.change(event)}
            value={props.value} />
    );
}

export default TextArea;