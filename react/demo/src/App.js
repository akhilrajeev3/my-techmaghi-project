import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import React from 'react';

function NumberCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const reset =() =>
  {
    setCount(prevCount => 0)
  }

  return (
    <div className="App">
  

    
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      
      
   
    </div>
  );
}


export default NumberCounter;

