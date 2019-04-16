import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDetailCourse } from '../Component/redux/actions/course.actions'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CourseDetailPage extends Component {
  componentDidMount() {
    this.props.getDeCourse(this.props.match.params.courseid);
  }
  render() {
    return (
      <Row>
        <Col xl={12} md={12} xs={12}>
          {this.props.DetailCourse.TenKhoaHoc}
          {this.props.DetailCourse.MoTa}
        </Col>
      </Row>
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
    getDeCourse: (courseID) => {
      dispatch(getDetailCourse(courseID))
    }
  }
}
export default connect(mapstatetoProp, DispatchToProps)(CourseDetailPage);