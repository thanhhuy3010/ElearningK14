import {combineReducers} from 'redux'
import storeCourseReducer from '../reducers/course.reducers';
import storeUserReducer from '../reducers/user.reducers'

const rootReducer = combineReducers({
    storeCourseReducer,
    storeUserReducer

})
export default rootReducer;