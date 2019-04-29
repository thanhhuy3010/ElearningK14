import React, { Component } from 'react';
import CourseAdminList from '../Component/admin/CourseAdminList'
import { Link, Route } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import UserAdminList from '../Component/admin/User/UserAdminList';
import HeaderAdmin from '../Component/admin/HeaderAdmin';
class AdminPage extends Component {
  render() {
    return (
      <div className='adminPage'>
        <Row className="myRowAdmin">
          <Col md={2} xl={2} className='slidebarAdmin menuBar '>
            <div class=" border-right border-bottom" id="sidebar-wrapper" >
              <div class="sidebar">Cyber Course</div>
              <div class="list-group list-group-flush">
                <Link class="list-group-item list-group-item-action " to='/adminPage/adcourselist'>
                  Danh sách khóa học
                </Link>
                <Link class="list-group-item list-group-item-action border-bottom" to='/adminPage/userlist' >
                  Danh sách người dùng
                </Link>
              </div>
            </div>
          </Col>
          <Col md={10} className='slidebarAdmin' style={{  background: '#F0F2F5'}} >
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