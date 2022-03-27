import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './News.module.css';

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=ua&apiKey=9e57f68aa46441be9f2cd43e8e6a4fdb')
      .then(response => {
        setNews(response.data.articles);
      });
  }, []);

  return (
    <div className={styles.news}>
      <h1>Today's news:</h1>
      {news.map((el, idx) => (
        <div className={styles.newsElement} key={idx}>
          <img src={el.urlToImage} />
          <a href={el.url} className={styles.newsTitle}>
            {el.title}
          </a>
        </div>
      ))}
    </div>
  );
};
