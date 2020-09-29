import { combineReducers } from 'redux';
import propertyReducer from './propertyReducer/propertyReducer';

export default combineReducers({
    propertyReducer: propertyReducer
})