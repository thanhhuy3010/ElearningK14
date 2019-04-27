import * as types from '../constants/user.constants'

let stateDefault ={
    UserList : [] ,
    UserDetail: {},

}

const storeUserReducer = (state = stateDefault,action)=>{
    switch (action.type) {
        case types.GET_USER_LIST:
        {
            state.UserList = action.userList;
            return{...state};
        }

        case types.GET_DETAIL_USER:
        {
            state.UserDetail = action.userDetail
            return{...state};

        }
        case types.ADD_USER:
        {
            const updateState = [...state.UserList, action.addUser]
            state.UserList =updateState;
            return {...state}
        }

            default: return {...state};
    }
}

export default storeUserReducer;