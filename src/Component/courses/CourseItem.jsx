import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class CourseItem extends Component {
  render() {
    let { course } = this.props
    return (
      <div>
        <div >
          <Card className="itemCourse">
            <div className="image">
              <img src={course.HinhAnh} />
            </div>
            <div className="bg">
              <div className="content">
                <h3>{course.TenKhoaHoc}</h3>
                {course.MoTa}
              </div>
            </div>

          </Card>
        </div>

      </div>
    );
  }

}

export default CourseItem;