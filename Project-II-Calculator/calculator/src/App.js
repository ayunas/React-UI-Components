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
    <div id='calc'>
      <CalculatorDisplay/>
      <div id='section-1'>
          <Clear />
          <Keypad />
      </div>
      <div id='section-2'>
          <Divide />
          <Multiply />
          <Subtract />
          <Add />
          <Equal />
      </div>
    </div>
  );
};

export default App;
