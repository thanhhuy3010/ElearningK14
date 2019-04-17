import React, { Component } from 'react'
import Slider from '../Component/Slider'
import CourseList from '../Component/courses/CourseList'


 class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider/>
        <CourseList 
        />
      </div>
    )
  }
}
export default HomePage;
