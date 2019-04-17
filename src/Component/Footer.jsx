import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import image1 from '../images/huy.jpg';


import { Link } from 'react-router-dom'
class Footer extends Component {
  block = () => {
    return [
      {
        title: 'CyberCourse - Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.',
        content: (
          <div className="about" >
            <img src="./images/2hF95nBY.png" width='40%' alt="img" />
            <br />
          </div>
        )
      },
      {
        title: 'Address',
        content: (
          <div className="address">
            <span>
              <b>Office:</b>
            </span>
            <br />
            <div style={{ textAlign: 'left' }}>
              <span>
                <i>459 Su Van Hanh Q.10 , TP.HCM</i>
              </span>
              <br />
              <span>
                <i>233A Phan Van Tri Q.Binh Thanh, TP.HCM</i>
              </span>
              <br />
              <span>
                <i>459 Su Van Hanh Q.10</i>
              </span>
            </div>

          </div>
        )
      },
      {
        title: 'Language',
        content: (
          <div className='language'>
            <div>
              <Link to={`/coursedetail/` + this.props.MaKhoaHoc} >HTML & CSS </Link>

            </div>
            <div>
              <Link to={`/coursedetail/` + this.props.MaKhoaHoc} >JavaScript</Link>

            </div>
            <div>
              <Link to={`/coursedetail/` + this.props.MaKhoaHoc} >NodeJS</Link>
            </div>
            <div>
              <Link to={`/coursedetail/` + this.props.MaKhoaHoc} >ReactJS</Link>
            </div>
            <div>
              <Link to={`/coursedetail/` + this.props.MaKhoaHoc} >Angular</Link>
            </div>
          </div>
        )
      }

    ]
  }
  socialButton = () => [
    {
      handleOnClick: () => { },
      iconType: 'facebook',
      theme: 'filled',
      color: '#3B5998',
      bgColor: ''
    },
    {
      handleOnClick: () => { },
      iconType: 'youtube',
      theme: 'filled',
      color: '#FF0000',
      bgColor: ''
    },
    {
      handleOnClick: () => { },
      iconType: 'twitter',
      theme: '',
      color: '#1DA1F2',
      bgColor: ''
    },
    {
      handleOnClick: () => { },
      iconType: 'instagram',
      theme: '',
      color: '#fff',
      bgColor:
        'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
    }
  ]

  render() {
    const childrenToRender = this.block().map((item, index) => {
      return (
        <Col
          xs={12}
          md={4}
          key={index.toString()}
          className='block'
          title={null}
          content={null}
        >
          <h2 className="title">
            {typeof item.title === 'string' &&
              item.title.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/) ? (
                <img src={item.title} width='40%' alt='img' />
              ) : (
                item.title
              )}
          </h2>
          <div className="slogan">{item.content}</div>

        </Col>

        // <div className="footer">
        //   <div className="footer-wrap">
        //     <Container>
        //       <Row className="mainRow" >
        //         <Col xs={4} md={4}>
        //           <div className="foot-center">

        //           </div>
        //         </Col>
        //       </Row>
        //     </Container>

        //   </div>
        // </div>
      )
    })

    return (
      <div className='main-footer'>
        <OverPack key='x' playScale={0.2}>
          <QueueAnim className='footerhome-page' type='bottom' leaveReverse >
            <Container key='1' component={Row}>
              <Row className='myRow'  >
                {childrenToRender}
              </Row>
            </Container>

          </QueueAnim>
        </OverPack>


      </div>
    )


  }
}

export default Footer;