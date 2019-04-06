import React, { Component } from 'react'

import CourseItem from '../Component/courses/CourseItem';

// import {connect} from 'react-redux'
class HomePage extends Component {
  render() {
    return (
      <div>
        <CourseItem/>
      </div>
    )
  }
}
export default HomePage;
