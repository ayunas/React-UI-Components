import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    
    return (
    
        <div id='calc-display'>{props.text}</div>
    
    );
    
}

export default CalculatorDisplay;
