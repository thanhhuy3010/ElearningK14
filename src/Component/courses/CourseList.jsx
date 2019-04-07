import React, { Component } from 'react';
import {connect} from 'react-redux'
import CourseItem from '../courses/CourseItem'
import { getCourseList } from '../redux/actions/course.actions';
class CourseList extends Component {
    componentDidMount() {
        this.props.onSaveDSKH();
    }
    
    render() {
        if(this.props.DSKH){
            const elementCourse = this.props.DSKH.map((course,index)=>{
                return <CourseItem
                    key ={index}
                    course ={course}
                />
            })
            return (
                <div>
                    {elementCourse}
                </div>
            )
        }else{
            return (
                <h1>404 ERRORS</h1>
            )
        }

    }
}
const mapStateToProps = (state) => {
    console.log('state',state);
    return {
        DSKH : state.storeCourseReducer.CourseList
    }
    
}
const mapDispatchToProps = (dispatch) => {
    console.log('props show: ',dispatch);
    return {
        onSaveDSKH : ()=> {
            dispatch(getCourseList())
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(CourseList);

