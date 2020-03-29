import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TestComponent from './Components/TestComponent';
import HomeComponent from './Components/HomeComponent';
import AppbarComponent from './Components/AppbarComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <AppbarComponent/>
        <Switch>
          <Route path="/" exact component={HomeComponent}></Route>
          <Route path="/Test" component={TestComponent}></Route>
          {/* <Route path="*" component={<div>None</div>}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
