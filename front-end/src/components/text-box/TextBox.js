import React from 'react';
import './text-box.css';

const TextBox = (props) => {
    const { name, label, value, type } = props;
    return (
        <div className="text-box">
            <label htmlFor={name}>{label}</label>
            <input type={type === undefined ? 'text' : type} id={name} name={name} value={value} />
        </div>
    );
}

export default TextBox;