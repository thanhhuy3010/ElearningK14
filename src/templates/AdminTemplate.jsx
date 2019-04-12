import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AdminPage from '../Pages/AdminPage';
import LoginAdminPage from '../Pages/LoginAdminPage';
class AdminTemplate extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Route path='/loginAdmin' component={LoginAdminPage} />
            <Route path='/adminPage' component={AdminPage} />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default AdminTemplate;