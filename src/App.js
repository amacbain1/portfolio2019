import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';




class App extends Component {
  render() {
    return (
      <div className="App app-bg">
        < Header />
        < Home />
        < Projects />
        < Contact />
      </div>
    );
  }
}

export default App;
