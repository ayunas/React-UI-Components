import React from 'react';
import './Button.css';

const NumberButton = props => {
    console.log(props);
    
    return (
        <button className={props.buttonClass}>{props.text}</button>
    );
}

export default NumberButton;