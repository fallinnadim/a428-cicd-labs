import React, { useState, useEffect, Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  var date1 = new Date();
    var date2 = new Date("02/14/2024");
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffSeconds = Math.ceil(timeDiff / 1000); 
    const [counter, setCounter] = useState(diffSeconds);
    useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">I Love Ribeye</h1>
        </header>
        <p className="App-intro">
          <div>Countdown: {counter}</div>
          asdf <code>src/App.js</code> and save to reload.
        </p>
      </div>
  )
}

export default App
