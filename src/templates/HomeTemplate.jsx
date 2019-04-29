import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Header from '../Component/Header'
import '../Styles/HomePage.css';
import CourseDetailPage from '../Pages/CourseDetailPage';
import Footer from '../Component/Footer'
import UserProfile from '../Pages/UserProfile';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path='/HomePage' component={HomePage} />
            <Route path='/coursedetail/:courseid' component={CourseDetailPage} />
            <Route path='/profilePage/:profileid' component={UserProfile} />
            <Route path='/' exact component={HomePage} />
            <Route path='/user' exact component={UserProfile} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/signup' exact component={SignUp} />
            <Footer />
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}
