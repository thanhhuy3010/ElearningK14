import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
class CourseItem extends Component {
    render() {
        let {course} = this.props
        return (
            <Col md={4} xs={6} className="mb-4">
                <div className="card text-left">
                  <img className="card-img-top pb-2" src={course.HinhAnh} width="100%" height="200px" alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">{course.TenKhoaHoc}</h4>
                    <p className="card-text">Lượt Xem: {course.LuotXem}</p>
                  </div>
                </div>
            </Col>
        );
    }
}

export default CourseItem;