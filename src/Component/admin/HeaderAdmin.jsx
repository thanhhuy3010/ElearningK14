import React, { Component } from 'react';
import { Col, Navbar } from 'react-bootstrap'
class HeaderAdmin extends Component {
  render() {
    return (
      <div>
        {/* <Container>
 </Container> */}
          <Col md={12} lg={12} style={{ padding: 0, margin: 0,background:'white' }}>
            <div className='headerAdmin'>
              <Navbar className='justify-content-end' expand="lg" variant="light">
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text className=''>
                     <a href="#login">Login</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Col>

      </div>
    );
  }
}

export default HeaderAdmin;