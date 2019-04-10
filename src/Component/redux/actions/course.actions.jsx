import {GET_COURSE_LIST} from '../constants/course.constants'
import Axios from 'axios'


export const getCourseList = () => {
    return(dispatch) => {
        Axios({
            method:"GET",
            url:'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc'
        }).then(res => {
            dispatch(actionGetCourseList(res.data));
            console.log(res.data);
        }).catch(err => {
            console.log('error:' ,err);
            
        })
    }
}

export const actionGetCourseList = (courseList) => {
    return {
        type: GET_COURSE_LIST,
        courseList
    }
} 