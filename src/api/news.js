import axios from 'axios';

const API_KEY = '7eb308312112084d1d00f11db35d53cb';

export const api = {
  getNews(keyword) {
    return axios.get(`https://gnews.io/api/v4/search?q=${keyword}&token=${API_KEY}`).then(response => response.data);
  },
};
