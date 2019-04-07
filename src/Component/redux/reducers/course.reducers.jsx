import * as types from '../constants/course.constants'

let stateDefault ={
    CourseList : []
}

const storeCourseReducer = (state = stateDefault,action)=>{
    switch (action.type) {
        case types.GET_COURSE_LIST:
        {
            state.CourseList = action.courseList;
            return{...state};
        }
            default: return {...state};
    }
}

export default storeCourseReducer;