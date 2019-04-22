import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap/'
import HeaderAdmin from './HeaderAdmin';
import CourseAdminList from './CourseAdminList'
import {Link,Route} from 'react-router-dom'
class ContainerMenu extends Component {
  componentDidMount() {
    
  }
  render() {


    return (

      <Row>

        <Col md={3} style={{ background: 'pink' }}>
          <Link to='adminPage/adcourselist'>
            danh sách khóa học
          </Link>
        </Col>
        <Col md={9} >
          <Route path='/:id' component={CourseAdminList}/>

          {/* <CourseAdminList/> */}
        </Col>
      </Row>


    );
  }
}

export default ContainerMenu;