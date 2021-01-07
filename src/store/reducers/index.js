import { combineReducers } from 'redux';
import { count } from './countReducer';
import { post } from './postReducer';

const rootReducer = combineReducers({ count, post })

export default rootReducer