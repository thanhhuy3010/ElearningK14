import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';
import 'antd/dist/antd.css'
import '../Styles/HomePage.css';



class Slider extends Component {
    render() {
        return (
            <div>
                <div className="slider">
                    <div className="back">
                        {/* <img src="./images/vlu.jpg" alt="" /> */}
                        <div className="content">
                            <div className="text">
                                <h3>Ở đây có tất cả những gì bạn muốn học</h3>
                                <h3>Tìm kiếm khóa học bạn cần tại đây:</h3>
                                <Form className="search">
                                    <FormControl type="text" placeholder="Search" className="mr-sm-xs-2 search__input " />
                                    <Button className="search__button" variant="outline-success"><i class="fa fa-search"></i></Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;