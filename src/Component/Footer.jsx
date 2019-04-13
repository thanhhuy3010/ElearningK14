import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
class Footer extends Component {
   block = () => {
    return [
      {
        title:'CyberCourse',
        content:(
          <div className="about" >
             
          </div>
        )
      }
    ]
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-wrap">
          <Container>
            <Row className="mainRow" >
              <Col xs={4} md={4}>
                <div className="foot-center">
                  <div className="foot-header">
                    <h2>CyberCourse</h2>
                  </div>
                  <div>
                    <a href="#">Gioi thieu</a>
                  </div>
                  <div>
                    <a href="#"></a>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Col>
              <Col xs={4} md={4}>
                demo2
              </Col>
              <Col xs={4} md={4}>
                demo2
              </Col>
            </Row>
          </Container>

        </div>
      </div>
    );
  }
}

export default Footer;