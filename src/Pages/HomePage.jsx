import React, { Component } from 'react'
import Slider from '../Component/Slider'


import CourseList from '../Component/courses/CourseList'


 class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider/>
        <CourseList 
          // data={this.props.DSKH}
        />
      </div>
    )
  }
}
export default HomePage;
