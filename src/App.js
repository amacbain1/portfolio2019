import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';




class App extends Component {
  render() {
    return (
      <div className="App app-bg">
        < Header />
        < Home />
      </div>
    );
  }
}

export default App;
