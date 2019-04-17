import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom'
import { Button, NavDropdown } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
      <div className="mainHeader">
        <Navbar className="myNavbar" bg="light" expand="lg">
          <Link to='/HomePage' ><Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link> 
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      // <div>

      //   <Navbar bg="light" expand="lg">
      //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="mr-auto">
      //         <Nav.Link href="#home">Home</Nav.Link>
      //         <Nav.Link href="#link">Catalog</Nav.Link>
      //       </Nav>

      //     </Navbar.Collapse>
      //     <ButtonToolbar>
      //         <Button className="signIn" >Primary</Button>              
      //     </ButtonToolbar>
      //   </Navbar>

      // </div>
    );
  }
}

export default Header;