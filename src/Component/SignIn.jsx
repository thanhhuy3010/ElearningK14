import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import '../style/SignIn.css'
import Background from '../images/hutech.jpg'

const styles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    // backgroundPosition: 'center center'
    width: '100%',
    height: 700,
    paddingTop: 55,
}

export default class SignIn extends Component {
    render() {
        return (
            <div style={styles}>
                <div className="Signin">
                    <div className="loginBox">
                        <img src="" alt="" className="user" />
                        <h2>Sign In Here</h2>
                        <Form>
                            <p>Email</p>
                            <input type="email" placeholder="Enter Email please" />
                            <p>Password</p>
                            <input type="password" placeholder="************" />
                            <input type="submit" value="Sign In" />
                            <a href="">Forget Password</a>
                        </Form>
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
