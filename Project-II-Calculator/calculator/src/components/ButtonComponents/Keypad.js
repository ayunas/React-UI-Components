import React from 'react';
import './Button.css';

const Keypad = () => {
    
    const digits = [7,8,9,4,5,6,1,2,3,0];
    
    return (
        <div id='keypad'>
            {digits.map( digit => <button id={digit} className='digit'>{digit}</button>)}
        </div>
    );
}

export default Keypad;
