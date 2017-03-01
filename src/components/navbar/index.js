import React,{Component} from 'react';
import logo from './logo.svg';
import { Nav,NavItem,NavDropdown,MenuItem,Navbar}  from 'react-bootstrap';
import './style.css';
class MainNavbar extends Component {
  render() {
    return (
    <div>
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <img src={logo}  className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavDropdown eventKey={3} title="Action" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Admin</MenuItem>
          <MenuItem eventKey={3.2}>User</MenuItem>
          <MenuItem eventKey={3.3}>Super User</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Master</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">User Info</NavItem>
        <NavItem eventKey={2} href="#">logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
);
}
}
export default MainNavbar;
