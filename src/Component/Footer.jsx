import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import image1 from '../images/huy.jpg';


const styles1 = {
  backgroundImage: `url(${image1})`,
}

class Footer extends Component {
  block = () => {
    return [
      {
        title: 'CyberCourse',
        content: (
          <div className="about" >

          </div>
        )
      }
    ]
  }
  render() {
    return (
      <div>
        Đây là footer
      </div>
    );
  }
}

export default Footer;