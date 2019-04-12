import React, { Component } from 'react'
import CourseList from '../Component/courses/CourseList'
import '../style/CourseList.css'
 class HomePage extends Component {
  render() {
    return (
      <div>
        Homepage
        <CourseList 
          // data={this.props.DSKH}
        />
      </div>
    )
  }
}
export default HomePage;
