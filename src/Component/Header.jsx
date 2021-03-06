import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom'
// import { Button, NavDropdown } from 'react-bootstrap';
// import SignIn from '../Component/SignIn'
const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       showModal: false
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick = () => {
  //   this.setState({
  //     showModal: !this.state.showModal
  //   });
  // }
  // getComponent() {
  //   if (this.state.showModal) {  // show the modal if state showModal is true
  //     return <SignIn/>;
  //   } else {
  //     return null;
  //   }
  // }
  render() {
    // const { isAuthen } = this.props.auth;
    // const userLinks = (
    //   <div>
    // <Link to="/signin" className="btn btn-link" >Sign In</Link>
    // <Link to="/signup" className="btn btn-link">Sign Up</Link>

    //   </div>

    // );
    // const adminLinks = (
    //   <div>
    //     <Link to="/signin" className="btn btn-link" >Sign In</Link>
    //     <Link to="/signup" className="btn btn-link">Sign Up</Link>

    //   </div>
    // );
    return (
      <div className="mainHeader" >
        <Navbar className="myNavbar" expand="lg">
          <Link to='/HomePage' ><Navbar.Brand>Cyber Course</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <Nav >
              {/* <Button variant="primary" onClick={this.handleClick} label="Action"/>
              {this.getComponent} */}
              <i className="material-icons" style={styles}>account_circle</i>
              <Link to="/signin" className="btn btn-link" >Sign In</Link>
              <Link to="/signup" className="btn btn-link">Sign Up</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
// NavigationBar.propTypes = {
//   auth: React.propTypes.object.isRequired
// }
// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth
//   }
// }
export default Header;