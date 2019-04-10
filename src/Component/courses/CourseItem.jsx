import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
class CourseItem extends Component {
    render() {
        let {course} = this.props
        return (
          <Link to = {`/coursedetail/` + course.MaKhoaHoc}>
            <Col md={3} xs={6} className="mb-4">
                <p>{course.TenKhoaHoc}</p>
            </Col>
          </Link>

        );
    }
}

export default CourseItem;