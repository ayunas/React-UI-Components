import React from 'react';
import './Button.css';

const Number = () => {
    
    const digits = [0,1,2,3,4,5,6,7,8,9];
    
    return (
        digits.map( digit => <button>{digit}</button>)
    );
}

export default Number;
