import React, { Component } from 'react';
import './App.css';
import MainNavbar from './components/navbar';
import SideBar from './components/sidebar';
import { Col, Row}  from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainNavbar/>
      <Row>
          <Col xs={1}>
            <SideBar/>
          </Col>
          <Col xs={11}></Col>
          </Row>
      </div>
    );
  }
}

export default App;
