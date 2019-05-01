import React, { Component } from 'react';

import { ButtonToolbar, Button, Modal } from 'react-bootstrap';
import FormAddCourse from './FormAddCourse';

class AddCourseModal extends Component {
  constructor(props, text) {
    super(props, text)
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.state = {
      show: false
    }
  }
  handleHide() {
    this.setState({ show: false })
  }
  handleShow() {
    this.setState({ show: true })
  }
  render() {
    return (
      <>
        <ButtonToolbar>
          <Button onClick={this.handleShow} className='buttonAddCourse'>
            <><i className="material-icons">add</i></>
            <span>Thêm Khóa Học</span>
          </Button>
        </ButtonToolbar>
        <Modal show={this.state.show} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm khóa học</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormAddCourse/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddCourseModal;