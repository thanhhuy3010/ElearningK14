import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';
// import Background1 from '../images/hutech.png';
// import Background2 from '../images/vlu.jpg';



// const styles = {
//     backgroundImage: `url(${Background1})`
// }
class Slider extends Component {
  render() {
    return (
      <div>
        <div className="contain">
          <div className="slider" ></div>
          <div className="back" ></div>
          <div className="bgContent"></div>
          <div className="content">
            <div className="text">
              <h3>Ở đây có tất cả những gì bạn muốn học</h3>
              <h3>Tìm kiếm khóa học bạn cần tại đây:</h3>
              <Form className="search">
                <FormControl type="text" placeholder="Search" className="mr-sm-xs-2 search__input " />
                <Button className="search__button" variant="outline-success"><i className="material-icons">search</i></Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;