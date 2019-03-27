import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import Keypad from './components/ButtonComponents/Keypad.js';
import Clear from './components/ButtonComponents/Clear.js';
import Divide from './components/ButtonComponents/Divide.js';
import Multiply from './components/ButtonComponents/Multiply.js';
import Subtract from './components/ButtonComponents/Subtract.js';
import Add from './components/ButtonComponents/Add.js';
import Equal from './components/ButtonComponents/Equal.js';

const App = () => {
  return (
    <div>
      <CalculatorDisplay/>
      <Clear />
      <Divide />
      <Keypad />
      <Multiply />
      <Subtract />
      <Add />
      <Equal />
      
    </div>
  );
};

export default App;
