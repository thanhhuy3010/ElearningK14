import React, { Component } from 'react';
import './App.css';
import HomeTemplate from './templates/HomeTemplate'
import AdminTemplate from './templates/AdminTemplate'
class App extends Component {
  loadRouter = () => {
    switch(window.location.pathname){
      case '/home': {
        return <HomeTemplate/>;
      };
      break;
      case '/adminPage':
      {
        return <AdminTemplate/>;
      };
      break;
      default :
      {
        return <HomeTemplate/>
      }
    }
  }
  render() {

    return (
      <div className="App">
        {this.loadRouter()}
      </div>
    );
  }
}

export default App;
