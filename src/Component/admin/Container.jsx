import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap/'
import HeaderAdmin from './HeaderAdmin';
import CourseAdminList from './CourseAdminList'
import UserAdminList from './User/UserAdminList'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from '../SignIn';
import SignUp from '../SignUp';



class ContainerMenu extends Component {
  componentDidMount() {
  }
  render() {


    return (

      < Row >
        <Router>
        </Router>
        <Col md={3} style={{ background: 'red' }}>
        </Col>
        <Col md={9} >
          <HeaderAdmin />
          <CourseAdminList />
          <UserAdminList />

        </Col>
      </Row >


    );
  }
}

export default ContainerMenu;