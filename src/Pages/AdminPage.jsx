import React, { Component } from 'react';
import CourseAdminList from '../Component/admin/CourseAdminList'
import {Link,Route} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
class AdminPage extends Component {
    render() {
        return (
            <div>
                <Row>

                    <Col md={3} style={{ background: 'pink' }}>
                        <Link to='/adminPage/adcourselist'>
                            danh sách khóa học
                        </Link>
                    </Col>
                    <Col md={9} >

                        <Route path='/adminPage/adcourselist' component={CourseAdminList} />

                        {/* <CourseAdminList/> */}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AdminPage;