import React, { useState, useEffect, Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  var date1 = new Date();
    var date2 = new Date("02/14/2024");
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffSeconds = Math.ceil(timeDiff / 60000); 
    const [counter, setCounter] = useState(diffSeconds);
    useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 60000);
    }, [counter]);
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bukan Valentine yaaaa kakkk</h1>
        </header>
        <p className="App-intro">
          <div>Countdown: {counter} menit</div>
          menuju Pemilu, Coblos dengan Bijak !!!
        </p>
      </div>
  )
}

export default App
