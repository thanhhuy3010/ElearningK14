import React, { Component } from 'react';
import { connect } from 'react-redux'
import CourseItem from '../courses/CourseItem'
import { getCourseList } from '../redux/actions/course.actions';
import '../../Styles/HomePage.css';

const styles = {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 50
}

class CourseList extends Component {
    componentDidMount() {
        this.props.onSaveDSKH();
    }
    

    render() {
        if (this.props.DSKH) {
            const elementCourse = this.props.DSKH.map((course, index) => {
                return <CourseItem
                    key={index}
                    course={course}
                />
            })
            return (
                <div>
                    <p style={styles}>Paths are in-depth structured learning journeys that you can take at your own pace and get to your desired outcome.</p>
                    <div className="listCourse">
                        {elementCourse}
                    </div>
                </div>

            )
        } else {
            return (
                <h1>404 ERRORS</h1>
            )
        }

    }
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        DSKH: state.storeCourseReducer.CourseList
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log('props show: ', dispatch);
    return {
        onSaveDSKH: () => {
            dispatch(getCourseList())
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);


