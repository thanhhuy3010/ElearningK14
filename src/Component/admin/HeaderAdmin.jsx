import React, { Component } from 'react';
import { Row, Col, Navbar, Container } from 'react-bootstrap'
class HeaderAdmin extends Component {
  render() {
    return (
      <div>
        {/* <Container>
 </Container> */}
        <Row>

          <Col md={12} lg={12} style={{ padding: 0, margin: 0 }}>
            <div className='headerAdmin'>

              <Navbar className='justify-content-end' expand="lg" variant="light" bg="light">
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text className='mr-3'>
                     <a href="#login">Mark Otto</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Navbar>

            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HeaderAdmin;