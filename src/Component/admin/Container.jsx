import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap/'
import HeaderAdmin from './HeaderAdmin';

class ContainerMenu extends Component {
    render() {
        return (

            <Row>
            
                <Col md={3} style={{ background: 'red' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus cum, totam, temporibus, delectus harum in minima tempora quibusdam accusamus aspernatur. Quidem voluptatem ipsam optio suscipit! Fuga ipsum inventore voluptatum.
                </Col>
                <Col md={9} >
                        <HeaderAdmin/>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                        
                </Col>
            </Row>


        );
    }
}

export default ContainerMenu;