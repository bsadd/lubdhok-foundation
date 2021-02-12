import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './homeSection.module.css';

export default ({ title, description, reverse }) => (
  <div className={`${styles.homeSection} ${reverse ? styles.reverse : ''}`}>
    <ScrollAnimation
      animateIn={reverse ? 'slideInRight' : 'slideInLeft'}
      animateOnce
      delay={200}
      className={styles.homeSectionTitle}
    >
      {title}
    </ScrollAnimation>
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce
      delay={200}
      className={styles.homeSectionDescription}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
    </ScrollAnimation>
  </div>
);

export const HomeSectionContainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)