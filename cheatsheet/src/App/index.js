import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../Pages/Home'
import Markdown from './../Pages/Markdown'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/cheatsheet" component={Home} />
          <Route path="/cheatsheet/markdown" component={Markdown} />
        </div>
      </Router>
    );
  }
}

export default App;
