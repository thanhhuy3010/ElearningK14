import React, { Component } from 'react'
import {Button,Form} from 'react-bootstrap'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import { Prompt, Redirect } from 'react-router-dom'
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
    state = {
        username: '',
        password: ''
    }

    onChangeValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    Login = (e) => {
        e.preventDefault(); //dùng submit reload lại trang
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            let userLogin = {
                username: this.state.username,
                password: this.state.password
            }
            localStorage.setItem('userLogin', JSON.stringify(userLogin));
            this.setState({ isSaveForm: false });
        }
    }
    render() {
        if (localStorage.getItem('userLogin')) {
            return (
                <Redirect to={'/HomePage'} />
            )
        }
        return (
            <div style={styles}>
                <Prompt
                    when={true}
                    message={location => (`Do you want to exit ${location.pathname}?`)}
                />
                <div className="Signin">
                    <div className="loginBox">
                        <img src="" alt="" className="user" />
                        <h2>Sign In Here</h2>
                        <Form>
                            <p>Email</p>
                            <input type="email" onChange= {this.onChangeValue} placeholder="Enter Email please" />
                            <p>Password</p>
                            <input type="password" placeholder="************" />
                            <Button variant='primary' className='' onChange = {this.Login}  value="Sign In" >Login</Button>
                            <a href="">Forget Password</a>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
