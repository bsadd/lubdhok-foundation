import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useHeroContainerData } from './query';
import styles from './heroContainer.module.css';

const MEMBER_FORM_URL = 'https://forms.gle/Na2qTkpp7Avpe9Le6';

const HeroContainer = () => {
  const data = useHeroContainerData();

  if (!data) {
    return null;
  }
  const heroImageStyle = {
    background: `url(${data.backgroundImage.fluid.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    height: '350px',
    backgroundPosition: 'center',
  };

  return (
    <div className={styles.hero}>
      <div
        style={heroImageStyle}
        title="Lubdhok Foundation Hero Container"
      ></div>
      <div className={styles.heroDetails}>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <h3 className={styles.heroHeadline}>{data.title}</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={500}>
          <p>{data.shortDescription}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={250}>
          <a
            className={styles.heroBtn}
            href={MEMBER_FORM_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            Become a member
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
};
export default HeroContainer;
