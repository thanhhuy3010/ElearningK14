import React, { Component } from 'react';
import CourseAdminItem from './CourseAdminItem'

import { getCourseList } from '../redux/actions/course.actions'
import { Table, Card, Container,Modal,Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import AddCourseModal from '../courses/AddCourseModal';
class CourseAdminList extends Component {
  componentDidMount() {
    this.props.SaveDSKH();
  }
  render() {
    let elmCourse = this.props.DSKH.map((adCourse, index) => {
      return <CourseAdminItem
        key={index}
        adCourse={adCourse} />
    })
    return (
      <div className='table-group'>
        <Container>
          <Card style={{ padding: '15px' }}>
            <AddCourseModal/>
            <div className="text-center"><h3>Danh sách khóa học</h3></div>
            <Table hover responsive bordered >
              <thead>
                <tr>
                  <th className="text-center">Hình Ảnh</th>
                  <th className="text-center">Mã Khóa Học</th>
                  <th className="text-center">Tên Khóa Học</th>
                  <th className="text-center">Người Tạo</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {elmCourse}
              </tbody>
            </Table>
          </Card>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    DSKH: state.storeCourseReducer.CourseList
  }
}
const dispatchToProps = (dispatch) => {
  return {
    SaveDSKH: () => {
      dispatch(getCourseList())
    }
  }
}

export default connect(mapStateToProps, dispatchToProps)(CourseAdminList);