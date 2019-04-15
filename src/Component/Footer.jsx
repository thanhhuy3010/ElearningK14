import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
class Footer extends Component {
  block = () => {
    return [
      {
        title: 'CyberCourse',
        content: (
          <div className="about" >
            <img src="./images/vlu.jpg" width='50%' alt="img" />
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facilis labore. Voluptatem expedita, fugit voluptates repudiandae iusto labore tempora adipisci totam officiis nam repellendus odit corrupti maxime doloribus. Consequatur, deserunt.
          </div>
        )
      },
      {
        title: 'Address',
        content: (
          <div className="address">
            <p>
              <b>Office</b>
            </p>
            <span>
              <i>459 Su Van Hanh Q.10</i>
            </span>
          </div>
        )
      },
      {
        title: 'Language',
        content: (
          <div>
            <div>
              <a href="#">HTML</a>

            </div>
            <div>
              <a href="#">HTML</a>

            </div>
            <div>
              <a href="#">HTML</a>

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
          <h2 className="logo">
            {typeof item.title === 'string' &&
              item.title.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/) ? (
                <img src={item.title} width='100%' alt='img' />
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

  return(
    <div className='main-footer'>
      <OverPack key ='x' className='footer1' playScale={0.1}>
        <QueueAnim className='home-page' type='bottom' key='ul' leaveReverse component={Row}>
            {childrenToRender}
          </QueueAnim>
      </OverPack>
    </div>
  )


  }
}

export default Footer;