import { combineReducers } from 'redux';
import todoReducer from './todo';

let rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;