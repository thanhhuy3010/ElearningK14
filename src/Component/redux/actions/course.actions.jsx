
import {GET_COURSE_LIST, GET_DETAIL_COURSE,ADD_COURSE} from '../constants/course.constants'
import Axios from 'axios'


export const getCourseList = () => {
    return(dispatch) => {
        Axios({
            method:"GET",
            url:'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc'
        }).then(res => {
            dispatch(actionGetCourseList(res.data))
        }).catch(err => {
            console.log('error:' ,err);
        })
    }
}

export const addCourseList = (khoahoc) => {
    console.log(khoahoc);
    
    return(dispatch) => {
        Axios({
            method:"POST",
            url:'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc'
        }).then(res => {
            dispatch(actionAddCourse(res.data))
        }).catch(err => {
            console.log('error:',err);
            
        })
    }
}


export const getDetailCourse = (courseid) => {
    return(mapstate) => {
        Axios({
            method: "GET",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/ChiTietKhoaHoc/${courseid}`
        }).then(res=> {
            mapstate(actionGetCourseDetail(res.data))
        }).catch(err => {
            console.log('error: ',err);
        })
    }
}

// export const AddCourse = () => {
//     return
// }

//admin get courselist
export const actionAddCourse = (addCourse) => {
    return {
        type: ADD_COURSE,
        addCourse
    }
}

export const actionGetCourseList = (courseList) => {
    return {
        type: GET_COURSE_LIST,
        courseList
    }

}
export const actionGetCourseDetail = (courseDetail) => {
    return {
        type: GET_DETAIL_COURSE,
        courseDetail
    }
}

