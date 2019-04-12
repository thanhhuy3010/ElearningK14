import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
class CourseItem extends Component {
    render() {
        let {course} = this.props
        return (
          <Link to = {`/coursedetail/` + course.MaKhoaHoc}>
            <Col md={12} xs={12} className="mb-4 courseItem">
                <div className="courseCover">
                  <img src={course.HinhAnh} width='30%' alt="imgs"/>
                </div>
                <div className="info">
                  <div className="nameTitle">
                    <span>{course.TenKhoaHoc}</span>
                  </div>
                  <div><p>Lượt Xem:{course.LuotXem}  </p></div>
                </div>
            </Col>
          </Link>

        );
    }
}

export default CourseItem;