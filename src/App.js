import React, { Component } from 'react';
import './App.css';
import MainNavbar from './components/navbar';
import SideBar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainNavbar/>
      <SideBar/>
      </div>
    );
  }
}

export default App;
