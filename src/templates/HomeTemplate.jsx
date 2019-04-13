import React, { Component ,Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Header from '../Component/Header'
import CourseDetailPage from '../Pages/CourseDetailPage';
import LoginPage from '../Pages/LoginPage';
import Footer from '../Component/Footer'
export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <Fragment>
                <Header/>
                <Route path='/HomePage' component= {HomePage} />
                <Route path= '/loginpage' component={LoginPage}/>
                <Route path = '/coursedetail/:courseid' component={CourseDetailPage}/>
                <Route path = '/' exact component={HomePage} />
                <Footer/>
            </Fragment>
          </BrowserRouter>
          
      </div>
    )
  }
}
