import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});
const middleware = [logger, thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
