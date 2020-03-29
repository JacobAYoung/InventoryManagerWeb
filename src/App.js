import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './Components/TestComponent';

function App() {
  return (
    <div className="App">
      <TestComponent text={1}/>
    </div>
  );
}

export default App;
