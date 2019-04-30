import React, { Component } from 'react';
import CourseAdminList from '../Component/admin/CourseAdminList'
import { Link, Route } from 'react-router-dom'
import { Row, Col, Container, Card } from 'react-bootstrap'
import UserAdminList from '../Component/admin/User/UserAdminList';
import HeaderAdmin from '../Component/admin/HeaderAdmin';
class AdminPage extends Component {
  render() {
    return (
      <div className='adminPage' style={{minHeight:'100vh'}}>
        <Row className="myRowAdmin" >
          <Col md={2} xl={2} className='slidebarAdmin menuBar '>
            <div className=" border-right border-bottom" id="sidebar-wrapper" >
              <div className="sidebar">Cyber Course</div>
              <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action " to='/adminPage/adcourselist'>
                  Danh sách khóa học
                </Link>
                <Link className="list-group-item list-group-item-action border-bottom" to='/adminPage/userlist' >
                  Danh sách người dùng
                </Link>
              </div>
            </div>
          </Col>
          <Col md={10} className='slidebarAdmin' style={{  background: '#F0F2F5',}} >
            <HeaderAdmin />
            <div >
            <Route path='/adminPage/adcourselist' component={CourseAdminList} />
            <Route path='/adminPage/userlist' component={UserAdminList} />
            </div>


          </Col>
        </Row>
      </div>
    );
  }
}

export default AdminPage;