import React from 'react';
import Carousel from 'react-multi-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import { useMedia } from '../../hooks/useMedia';
import { useHeroContainerData } from './query';
import styles from './heroContainer.module.css';
import 'react-multi-carousel/lib/styles.css';

const MEMBER_FORM_URL = 'https://forms.gle/Na2qTkpp7Avpe9Le6';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HeroItem = ({ data }) => {
  console.log('hero item', data);
  const { mobile } = useMedia();
  const backgroundImg = mobile ?
    data.backgroundSmallImage.fluid.src
    : data.backgroundImage.fluid.src;

  const mobileStyles = mobile ?
    {
      backgroundPosition: 'center',
    }: {};

  const heroImageStyle = {
    background: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 400px',
    height: '400px',
    backgroundPosition: 'cover',
    ...mobileStyles,
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
          <h4>{data.shortDescription}</h4>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={250}>
          <a
            className={styles.heroBtn}
            href={data.actionLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            {data.actionLabel}
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
};

const HeroContainer = () => {
  const items = useHeroContainerData();
  
  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      >
        {
          items && items.length &&
            items.map((item, index) => (<HeroItem key={index} data={item} />))
        }
      </Carousel>
    </div>
  );
};
export default HeroContainer;
