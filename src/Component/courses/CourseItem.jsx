import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CourseItem extends Component {
  render() {
    let { course } = this.props
    return (
      <div >


        <Link to={`/coursedetail/`  + course.MaKhoaHoc} className="itemCourse">
          <div className="image">
            <img src={course.HinhAnh} alt='img'/>
          </div>
          <div className="bg">
            <div className="content">
              <h3>{course.TenKhoaHoc}</h3>
              {course.MoTa}
            </div>
          </div>

        </Link>




      </div>
    );
  }

}

export default CourseItem;