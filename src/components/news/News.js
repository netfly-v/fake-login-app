import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { newsSelector } from '../../store/state/news/selectors';
import { addNewsAction } from '../../store/thunks/newsThunk';
import styles from './News.module.css';

const News = ({news, addNews}) => {
  useEffect(() => {
    addNews();
  }, []);

  return (
    <div className={styles.news}>
      <h1 className={styles.h1}>Today's news:</h1>
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

const mapStateToProps = state => ({
  news: newsSelector(state),
});

const mapDispatchToProps = {
  addNews: addNewsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
