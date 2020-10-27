import { combineReducers } from 'redux';
import { countReducer } from './countReducer';
import { postReducer } from './postReducer';

const rootReducer = combineReducers({ countReducer, postReducer })

export default rootReducer