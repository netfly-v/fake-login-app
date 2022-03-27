import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({
  abc: () => '123',
});

export const store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));
