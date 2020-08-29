import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import { useHeroContainerData } from './query';
import styles from './heroContainer.module.css';

const HeroContainer = () => {
  const data = useHeroContainerData();
  console.log(data, 'data');
  if (!data) {
    return null;
  }
  const heroImageStyle = {
    background: `url(${data.backgroundImage.fluid.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    height: '350px',
    backgroundPosition: 'center',
    filter: 'grayscale(100%)',
  };

  return (
    <div className={styles.hero}>
      <div style={heroImageStyle}></div>
      <div className={styles.heroDetails}>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <h3 className={styles.heroHeadline}>{data.title}</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={500}>
          <p>{data.shortDescription}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={250}>
          <Link className={styles.heroBtn} to="/donate">
            Donate
          </Link>
        </ScrollAnimation>
      </div>
    </div>
  );
};
export default HeroContainer;
