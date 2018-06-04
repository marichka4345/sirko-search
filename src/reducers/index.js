import { combineReducers } from 'redux';
import colors from './colors';
import breeds from './breeds';
import filters from './filters';
import markers from './markers';

export default combineReducers({
  breeds,
  colors,
  filters,
  markers
});