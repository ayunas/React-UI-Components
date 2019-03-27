import React from 'react';
import './Button.css';

const Keypad = () => {
    
    const digits = [0,1,2,3,4,5,6,7,8,9];
    
    return (
        <div id='keypad'>
            {digits.map( digit => <button id={digit} className='digit'>{digit}</button>)}
        </div>
    );
}

export default Keypad;
