import React, { Component } from 'react';

class CourseItem extends Component {
    render() {
        let {course} = this.props
        return (
            <div>
                <div className="card text-left">
                  <img className="card-img-top" src={course.HinhAnh} alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">{course.TenKhoaHoc}</h4>
                    <p className="card-text">{course.LuotXem}</p>
                  </div>
                </div>
            </div>
        );
    }
}

export default CourseItem;