import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { actionAddCourse } from '../redux/actions/course.actions'
import { connect } from 'react-redux'
class FormAddCourse extends Component {
  state = {
    MaKhoaHoc: 0,
    TenKhoaHoc: '',
    MoTa: '',

  }
  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  addCourse = (course) => {
    course.preventDefault();
    console.log(this.state);
    this.props.addCourseComponent(this.state);
  }
  // componentWillReceiveProps(newProps){
  //   this.setState(newProps.courseEdit)
  // }
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Tên Khóa Học</Form.Label>
            <Form.Control type="text" placeholder="Nhập tên khóa học" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Người Tạo</Form.Label>
            <Form.Control type="text" placeholder="Nhập tên người tạo" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Hình Ảnh</Form.Label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="validatedCustomFile" required />
              <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
            </div>          
          </Form.Group>
          <Form.Group>
            <Button type="submit" variant="success">Thêm khóa học</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
const themKhoaHocVaoStore = (dispatch) => {
  return {
    addCourseComponent: (addCourse) => {
      dispatch(actionAddCourse(addCourse))
    }
  }
}

export default connect(null, themKhoaHocVaoStore)(FormAddCourse);