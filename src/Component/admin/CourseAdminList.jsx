import React, { Component } from 'react';
import CourseAdminItem from './CourseAdminItem'
import {getCourseList} from '../redux/actions/course.actions'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'
class CourseAdminList extends Component {
    componentDidMount() {
        this.props.SaveDSKH();
    }
    
    render() {
        let elmCourse = this.props.DSKH.map((adCourse, index) => {
            return <CourseAdminItem
                key = {index}
                adCourse = {adCourse}/>
        })
        return (
            <div>
                <Table hover bordered >
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-center">Mã Khóa Học</th>
                            <th className="text-center">Tên Khóa Học</th>
                            <th className="text-center">Người Tạo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmCourse}
                    </tbody>
                </Table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state' , state);
    return {
        DSKH : state.storeCourseReducer.CourseList
    }
    
}
const dispatchToProps = (dispatch) => {
    return {
        SaveDSKH: () => {
            dispatch(getCourseList())
        }
    }
}
export default connect(mapStateToProps, dispatchToProps) (CourseAdminList);