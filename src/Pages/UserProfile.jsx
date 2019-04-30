import React, { Component } from 'react'
import { Tab, Tabs, Form, Nav, Row, Col } from 'react-bootstrap'

import '../style/UserProfile.css';
export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="profile">

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
                              <Form.Control className="input" type="number" />
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
