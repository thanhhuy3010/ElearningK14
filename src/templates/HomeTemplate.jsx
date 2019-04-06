import React, { Component ,Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Header from '../Component/Header'
import Slider from '../Component/Slider'
export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <Fragment>
                <Header/>
                <Slider/>
                <Route path='/HomePage' component= {HomePage} />
                <Route path = '/' exact component={HomePage} />
            </Fragment>
          </BrowserRouter>
      </div>
    )
  }
}
