import React from 'react';
import styles from './sponsors.module.css';

export default ({ sponsors }) => {
  return (
    <div className={styles.sponsorSection}>
      <h3 className={styles.sponsorTitle}> Our sponsors</h3>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {[1, 2, 3, 4].map(() =>
            sponsors.map(({ node }, index) => (
              <div className={styles.slide} key={index}>
                <img
                  src={node.sponsorLogo.fluid.src}
                  height={index ? 65 : 75}
                  width="250"
                  alt={node.name}
                  style={{ marginTop: index ? '75px' : '65px' }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
