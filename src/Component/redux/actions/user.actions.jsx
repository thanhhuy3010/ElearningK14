
import {GET_USER_LIST, GET_DETAIL_USER,ADD_USER} from '../constants/user.constants'
import Axios from 'axios'


export const getUserList = () => {
    return(dispatch) => {
        Axios({
            method:"GET",
            url:'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung'
        }).then(res => {
            dispatch(actionGetUserList(res.data))
        }).catch(err => {
            console.log('error:' ,err);
        })
    }
}


export const getDetailUser = (taikhoan) => {
    return(mapstate) => {
        Axios({
            method: "GET",
            url: `http://svcy2.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=${taikhoan}`
        }).then(res=> {
            mapstate(actionGetUserDetail(res.data))
        }).catch(err => {
            console.log('error: ',err);
        })
    }
}

// export const AddCourse = () => {
//     return
// }

//admin get courselist
export const actionAddUser = (addUser) => {
    return {
        type: ADD_USER,
        addUser
    }
}

export const actionGetUserList = (userList) => {
    return {
        type: GET_USER_LIST,
        userList
    }

} 

export const actionGetUserDetail = (userDetail) => {
    return {
        type: GET_DETAIL_USER,
        userDetail
    }
}

