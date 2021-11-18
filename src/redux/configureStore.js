import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './rockets/rockets';
import missionsReducer from './missions/MissionsStore';

const reducer = combineReducers({
  rocketsReducer,
  missionsState: missionsReducer,
});
const middleware = [logger, thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
