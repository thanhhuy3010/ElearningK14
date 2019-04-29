import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminPage from '../Pages/AdminPage';
import '../Styles/AdminPage.css'
import LoginAdminPage from '../Pages/LoginAdminPage';
import CourseAdminList from '../Component/admin/CourseAdminList';
import UserAdminList from '../Component/admin/User/UserAdminList';
class AdminTemplate extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path='/loginAdmin' component={LoginAdminPage} />
              <Route path='/adminPage/' component={AdminPage} />
              <Route path='/adminPage/courselist' component={CourseAdminList} />
              <Route path='/adminPage/userlist' component = {UserAdminList}/>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default AdminTemplate;