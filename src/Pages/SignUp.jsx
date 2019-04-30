import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
import '../style/SignUp.css'
import Background from '../images/hutech.jpg'
const styles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  // backgroundPosition: 'center center'
  width: '100%',
  height: 700,
  paddingTop: 55,
}
export default class SignUp extends Component {
  render() {
    return (
      <div style={styles}>
        <div className="Signin">
          <div className="loginBox1">
            <img src="" alt="" className="user" />
            <h2>Sign Up Here</h2>
            <Form className="d-flex">
              <div className="left">
                <p>Email</p>
                <input type="email" placeholder="Enter Email please" />
                <p>Password</p>
                <input type="password" placeholder="************" />
              </div>
              <div className="right">
                <p>Full name</p>
                <input type="text" placeholder="Enter your full name please" />
                <p>Phone</p>
                <input type="text" placeholder="Enter your number please" />
              </div>
            </Form>
            <input type="submit" value="Sign Up" /> <br />
            <a href="">Forget Password</a>
          </div>
        </div>
        {/* <div className="Signin">
                    <Modal className="loginBox">
                        <Modal.Header closeButton>
                            <img src="" alt="" className="user" />
                            <Modal.Title>Sign In Here</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <p>Email</p>
                                <input type="email" placeholder="Enter Email please" />
                                <p>Password</p>
                                <input type="password" placeholder="******" />
                                <input type="submit" value="Sign In" />
                                <a href="">Forget Password</a>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                         </Button>
                            <input type="submit" value="Sign In" />
                        </Modal.Footer>
                    </Modal>
                </div> */}
      </div>
    )
  }
}
