import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDetailCourse } from '../Component/redux/actions/course.actions'
import '../Styles/CourseDetailPage.css'



class CourseDetailPage extends Component {

  componentDidMount() {
    this.props.getDeCourse(this.props.match.params.courseid);
  }
  render() {
    return (
      // <Row>
      //   <Col xl={12} md={12} xs={12}>
      //     {this.props.DetailCourse.TenKhoaHoc}
      //     <img src={this.props.DetailCourse.HinhAnh} alt="hinh" />
      //     {this.props.DetailCourse.MoTa}
      //   </Col>
      // </Row>
      <div className="detail">
        <div className="name">
          {this.props.DetailCourse.TenKhoaHoc}
        </div>
        <div className="blur"></div>
        <div className="background">
          <img className="image" src={this.props.DetailCourse.HinhAnh} alt="hinh" />
        </div>
        <div className="description">
          <h1 className="about">About the course:</h1>
          {this.props.DetailCourse.MoTa}
        </div>
      </div>
    );
  }

}

const mapstatetoProp = (mapstate) => {
  console.log('log: ', mapstate);
  return {
    DetailCourse: mapstate.storeCourseReducer.CourseDetail
  }
}
const DispatchToProps = (dispatch) => {
  console.log('dispatch: ', dispatch);
  return {
    getDeCourse: (courseid) => {
      dispatch(getDetailCourse(courseid))
    }
  }
}
export default connect(mapstatetoProp, DispatchToProps)(CourseDetailPage);