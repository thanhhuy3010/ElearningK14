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
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facilis labore. Voluptatem expedita, fugit voluptates repudiandae iusto labore tempora adipisci totam officiis nam repellendus odit corrupti maxime doloribus. Consequatur, deserunt.
          </div>
        )
      },
      {
        title:'Address',
        content:(
          <div className="address">
            <p>
              <b>Office</b>
            </p>
            <br/>
            <span>
              <i>459 Su Van Hanh Q.10</i>
            </span>
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
                  
                </div>
              </Col>
            </Row>
          </Container>

        </div>
      </div>
    );
  }
}

export default Footer;