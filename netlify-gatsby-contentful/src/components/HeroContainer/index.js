import React from 'react'
import {Link } from 'gatsby'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll'
import styles from './heroContainer.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <Img className={styles.heroImage} alt={data.title} fluid={data.backgroundImage.fluid} />
    <div className={styles.heroDetails}>
      <ScrollAnimation
        animateIn="zoomIn"
        animateOnce
      >
        <h3 className={styles.heroHeadline}>{data.title}</h3>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="zoomIn"
        animateOnce
        delay={500}
      >
        <p>{data.shortDescription}</p>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="bounceIn"
        animateOnce
        delay={1000}
      >
        <Link className={styles.heroBtn} to="/member-register">
          Become a member
        </Link>
      </ScrollAnimation>
    </div>
  </div>
)
