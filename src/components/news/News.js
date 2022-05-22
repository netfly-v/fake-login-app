import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newsSelector, isLoadedSelector } from '../../store/state/news/selectors';
import { addNewsAction } from '../../store/thunks/newsThunk';
import styles from './News.module.css';

const News = ({ news, addNews, isLoaded }) => {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.news}>
      <h1 className={styles.h1}>Today's news:</h1>
      <form className={styles.searchForm}
        onSubmit={event => {
          event.preventDefault();
          addNews(search);
        }}
      >
        <label>
          Enter news' keyword:
          <input type="text" onChange={({ target }) => setSearch(target.value)} />
        </label>
        <input type="submit" value="Search" />
      </form>
      {isLoaded && !news.length ? (
        <div>Nothing found</div>
      ) : (
        news.map((el, idx) => (
          <div className={styles.newsElement} key={idx}>
            <img src={el.image} alt="news img" />
            <a href={el.url} className={styles.newsTitle}>
              {el.title}
            </a>
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  news: newsSelector(state),
  isLoaded: isLoadedSelector(state),
});

const mapDispatchToProps = {
  addNews: addNewsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
