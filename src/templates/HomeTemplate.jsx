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
import SignIn from '../Component/SignIn';
import SignUp from '../Component/SignUp';

>>>>>>> 96b7f66ea6f149d3a6808f571eb7504bbcea0793

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
                <Route path = '/profilePage/:profileid' component = {UserProfile}/>
                <Route path = '/' exact component={HomePage} />
                <Route path = '/user' exact component={ProfileUserPage} />
                <Route path = '/signin' exact component={SignIn} />
                <Route path = '/signup' exact component={SignUp} />

                <Footer/>
            </Fragment>
          </BrowserRouter>
      </div>
    )
  }
}
