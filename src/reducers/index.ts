import { combineReducers } from 'redux'
import {counterReducer} from './counter'
//We combine the different reducers we are going to use

export default combineReducers({
    counterReducer
});