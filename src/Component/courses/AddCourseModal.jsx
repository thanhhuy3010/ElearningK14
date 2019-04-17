import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
class AddCourseModal extends Component {
constructor(props,text) {
  super(props,text)
  this.state = {
    show :  false
  }
}

handleClose() {
  this.setState({show : false})
}
handleShow() {
  this.setState ({show: true})
}
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AddCourseModal;