import { ADD_NEWS } from './types';

const initialState = {
  news: [],
  isLoaded: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, news: action.news, isLoaded: action.isLoaded };
    default:
      return state;
  }
};
