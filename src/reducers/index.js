import { combineReducers } from 'redux';
import date from './date';
import map from './map';
import videoPoints from './videoPoints';

export default combineReducers({
  date,
  map,
  videoPoints
});
