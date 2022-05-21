import { api } from '../../api/news';
import { addNews } from '../state/news/actions';

export const addNewsAction = () => dispatch => {
  api.getNews().then(data => dispatch(addNews(data.articles)));
};
