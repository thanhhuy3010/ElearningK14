import React, { Component } from 'react'
import background from '../images/huy.jpg'
import background2 from '../images/17917440_1429645520390237_5444345646827151540_o.jpg'

import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
const styles1 = {
    backgroundImage: `url(${background})`,
}
const styles2= {
    backgroundImage: `url(${background2})`,
}

export default class Teacher extends Component {
    render() {
        return (
            <div>
                <OverPack key ='x' playScale ={0.2}>
                    <QueueAnim type='bottom' className='teacher' leaveReverse>
                        
                            {/* <div className="footer-wrap">
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

                    </div> */}
                            <h1 className="title" key='1'>GIẢNG VIÊN TIÊU BIỂU</h1>
                            <div className="review" key ='1'>
                                <div className="item">
                                    <div className="image" style={styles1}>
                                    </div>
                                    <div className="text">
                                        <h1>Phó Nghĩa Văn</h1>
                                        <p>Giảng viên tại CyberCourse</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image" style={styles2}>
                                    </div>
                                    <div className="text">
                                        <h1>Lê Quang Song</h1>
                                        <p>Giảng viên tại CyberCourse - CEO CyberCourse </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="image" style={styles1}>
                                    </div>
                                    <div className="text">
                                        <h1>Thanh Huy</h1>
                                        <p>Giảng viên chuyên cần</p>
                                    </div>
                                </div>

                            </div>

                    
                    </QueueAnim>
                </OverPack>
            </div>
        )
    }
}
