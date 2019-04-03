import React, { Component } from 'react';
import './App.css';
import HomeTemplate from './templates/HomeTemplate'
class App extends Component {
  loadRouter = () => {
    switch(window.location.pathname){
      case '/home': {
        return <HomeTemplate/>;
      };
      break;
      // case '/admin':
      // {
      //   return <AdminTemplate/>;
      // };
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
