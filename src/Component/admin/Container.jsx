import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap/'
import HeaderAdmin from './HeaderAdmin';
import CourseAdminList from './CourseAdminList'
class ContainerMenu extends Component {
  componentDidMount() {
    
  }
  render() {


    return (

      <Row>

        <Col md={3} style={{ background: 'red' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus cum, totam, temporibus, delectus harum in minima tempora quibusdam accusamus aspernatur. Quidem voluptatem ipsam optio suscipit! Fuga ipsum inventore voluptatum.
                </Col>
        <Col md={9} >
          <HeaderAdmin />
          <CourseAdminList/>
        </Col>
      </Row>


    );
  }
}

export default ContainerMenu;