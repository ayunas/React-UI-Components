import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import Number from './components/ButtonComponents/Number.js';
import Clear from './components/ButtonComponents/Clear.js';

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <Clear />
      <Number />
    </div>
  );
};

export default App;
