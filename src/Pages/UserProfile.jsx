import React, { Component } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import '../style/UserProfile.css';


export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="profile">
                        {/* <Tabs defaultActiveKey="profile" transition={false} id="noanim-tab-example">
                            <Tab eventKey="profile" title="Profile">
                                <div className="up">
                                    <div className="boder">
                                        <div className="avatar">
                                            <p>Avatar</p>
                                            <div className="picture"></div>
                                            <button>Change avatar</button>
                                            <input type="button" value="Change avatar" />
                                        </div>
                                    </div>
                                    <div className="info--2">
                                        <Form>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Họ</Form.Label>
                                                <Form.Control className="input" type="text" />
                                            </Form.Group>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Tên</Form.Label>
                                                <Form.Control className="input" type="email" />
                                            </Form.Group>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Điện thoại</Form.Label>
                                                <Form.Control className="input" type="text" placeholder="Học viên" disabled />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>

                                <div className="boder">
                                    <div className="info--1">
                                        <Form>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Tên đăng nhập:</Form.Label>
                                                <Form.Control className="input" type="text" />
                                            </Form.Group>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Email:</Form.Label>
                                                <Form.Control className="input" type="email" />
                                            </Form.Group>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Chức vụ:</Form.Label>
                                                <Form.Control className="input" type="text" placeholder="Học viên" disabled />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>


                            </Tab>
                            <Tab eventKey="changepassword" title="Change Password">

                            </Tab>
                            <Tab eventKey="setting" title="Setting">

                            </Tab>

                        </Tabs> */}


                        {/* ///////////////////////////////////////////////////// */}
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col md={2} className="left">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Change profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Change password</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Setting</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col md={10}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                        <div className="up">
                                    <div className="boder">
                                        <div className="avatar">
                                            <p>Avatar</p>
                                            <div className="picture"></div>
                                            <input type="button" value="Change avatar" />
                                        </div>
                                    </div>
                                    <div className="info--2">
                                        <Form>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Họ:</Form.Label>
                                                <Form.Control className="input" type="text" />
                                            </Form.Group>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Tên:</Form.Label>
                                                <Form.Control className="input" type="email" />
                                            </Form.Group>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Điện thoại:</Form.Label>
                                                <Form.Control className="input" type="number"  />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>

                                <div className="boder">
                                    <div className="info--1">
                                        <Form>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Tên đăng nhập:</Form.Label>
                                                <Form.Control className="input" type="text" />
                                            </Form.Group>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Email:</Form.Label>
                                                <Form.Control className="input" type="email" />
                                            </Form.Group>
                                            <Form.Group className="d-flex form-group" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="label">Chức vụ:</Form.Label>
                                                <Form.Control className="input" type="text" placeholder="Học viên" disabled />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                    <button type="submit" className="btnUpdate">Update</button>
                </div>
            </div>
        )
    }
}
