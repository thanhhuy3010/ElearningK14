import * as types from '../constants/course.constants'

let stateDefault ={
    CourseList : [] ,
    CourseDetail: {},

}

const storeCourseReducer = (state = stateDefault,action)=>{
    switch (action.type) {
        case types.GET_COURSE_LIST:
        {
            state.CourseList = action.courseList;
            return{...state};
        }

        case types.GET_DETAIL_COURSE:
        {
            state.CourseDetail = action.courseDetail
            return{...state};

        }
        case types.ADD_COURSE:
        {
            const updateState = [...state.CourseList, action.addCourse]
            state.CourseList =updateState;
            return {...state}
        }

            default: return {...state};
    }
}

export default storeCourseReducer;