import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
// import AdminPage from '../Pages/AdminPage';
import '../Styles/AdminPage.css'
import LoginAdminPage from '../Pages/LoginAdminPage';
import HeaderAdmin from '../Component/admin/HeaderAdmin';
import CourseAdminList from '../Component/admin/CourseAdminList';
import ContainerMenu from '../Component/admin/Container'
class AdminTemplate extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <HeaderAdmin/>
            <Route path='/loginAdmin' component={LoginAdminPage} />
            <Route path='/adminPage' component={ContainerMenu} />
            <Route path='/courselist' component={CourseAdminList}/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default AdminTemplate;