import { combineReducers } from 'redux';
import questionReducers from './questionReducers';
import userReducers from './userReducers';

export default combineReducers({ questionReducers, userReducers })