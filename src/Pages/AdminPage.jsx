import React, { Component } from 'react';
import CourseAdminList from '../Component/admin/CourseAdminList'
import {Link,Route} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import UserAdminList from '../Component/admin/User/UserAdminList';
import HeaderAdmin from '../Component/admin/HeaderAdmin';
class AdminPage extends Component {
    render() {
        return (
            <div className='adminPage'>
                <Row>

                    <Col md={3} style={{ background: 'pink' }}>
                        <Link to='/adminPage/adcourselist'>
                            danh sách khóa học
                        </Link>
                        <br/>
                        <Link to='/adminPage/userlist'>
                            danh sách người dùng
                        </Link>
                    </Col>
                    <Col md={9} >
                        <HeaderAdmin/>
                        <Route path='/adminPage/adcourselist' component={CourseAdminList} />
                        <Route path = '/adminPage/userlist' component={UserAdminList}/>
                        {/* <CourseAdminList/> */}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AdminPage;