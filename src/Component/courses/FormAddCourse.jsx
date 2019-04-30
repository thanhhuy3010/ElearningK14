import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class FormAddCourse extends Component {
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
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FormAddCourse;