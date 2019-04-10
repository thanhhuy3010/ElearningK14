import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'antd/dist/antd.css'

class CourseItem extends Component {
  render() {
    let { course } = this.props
    return (
      <div>
        <div >
          <Card className="itemCourse">
            <img className="image" src={course.HinhAnh} />
            <div className="bg">
              <div className="content">
                <h3>{course.TenKhoaHoc}</h3>
                {course.MoTa}
              </div>
            </div>

          </Card>;
        </div>

      </div>
    );
  }
}

export default CourseItem;