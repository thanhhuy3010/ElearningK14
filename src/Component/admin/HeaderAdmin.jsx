import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
class HeaderAdmin extends Component {
    render() {
        return (
            <div>
                {/* <Container>
 </Container> */}
                    <Row>
                        <Col md={12} lg={12} style={{width:100,background:'blue'}}>
                            Header
                        </Col>
                    </Row>
               
                
            </div>
        );
    }
}

export default HeaderAdmin;