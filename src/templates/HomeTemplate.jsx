import React, { Component ,Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Header from '../Component/Header'
import '../Styles/HomePage.css';
import CourseDetailPage from '../Pages/CourseDetailPage';
import LoginPage from '../Pages/LoginPage';
import Footer from '../Component/Footer'
<<<<<<< HEAD
import UserProfile from '../Pages/UserProfile';
=======
import ProfileUserPage from '../Pages/ProfileUserPage';
>>>>>>> 37ce11d7379074c949db50376ebb7232a35356c8

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
                <Route path = '/user' exact component={UserProfile} />
                <Footer/>
            </Fragment>
          </BrowserRouter>
          
      </div>
    )
  }
}
