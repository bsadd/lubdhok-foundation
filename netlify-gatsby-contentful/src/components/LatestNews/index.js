import React from 'react';
import { useLatestNewsData } from './query';
import styles from './latestNews.module.css';

export const LatestNews = () => {
  const latestNews = useLatestNewsData();
  return (
    <div className={styles.latestNews}>
      <div className={styles.slider}>
        <div className={styles.latest}>
          <div>Latest news</div>
        </div> 
        <div className={styles.slideTrack}>
          {[1, 2, 3, 4].map(() =>
             latestNews.map(({node: news}, index) => (
                <div className={styles.slide} key={index}>
                  <span>{news.name}</span>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};
