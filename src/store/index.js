import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { newsReducer } from './state/news';

const reducers = combineReducers({
  news: newsReducer,
});

export const store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));
