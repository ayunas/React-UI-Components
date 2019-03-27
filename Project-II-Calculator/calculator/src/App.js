import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import Number from './components/ButtonComponents/Number.js';
import Clear from './components/ButtonComponents/Clear.js';
import Divide from './components/ButtonComponents/Divide.js';
import Multiply from './components/ButtonComponents/Multiply.js';


const App = () => {
  return (
    <div>
      <CalculatorDisplay/>
      <Clear />
      <Multiply />
      <Divide />
      <Number />
    </div>
  );
};

export default App;
