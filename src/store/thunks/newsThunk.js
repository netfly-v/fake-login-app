import { api } from '../../api/news';
import { addNews } from '../state/news/actions';

export const addNewsAction = (keyword) => dispatch => {
  api.getNews(keyword).then(data => dispatch(addNews(data.articles)));
};
