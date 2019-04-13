import React, { Component ,Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Header from '../Component/Header'


import '../Styles/HomePage.css';

import CourseDetailPage from '../Pages/CourseDetailPage';
import LoginPage from '../Pages/LoginPage';
import Footer from '../Component/Footer'
import ProfileUserPage from '../Pages/ProfileUserPage';

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
                <Route path = '/profilePage/:profileid' component = {ProfileUserPage}/>
                <Route path = '/' exact component={HomePage} />
                <Footer/>
            </Fragment>
          </BrowserRouter>
          
      </div>
    )
  }
}
