import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import styles from './socialMediaLinks.module.css';

const socialIcons = {
  facebook: faFacebookF,
  youtube: faYoutube,
  linkedin: faLinkedinIn,
  twitter: faTwitter,
};
const iconSize = {
  lg: '2x',
};

export const SocialMedialLinks = ({ socialMediaLinks, size = 'sm' }) => (
  <div className={`${styles.socialIcons} ${styles[size]}`}>
    {socialMediaLinks.map(({ node }, index) => (
      <a
        key={index}
        className={styles[node.key]}
        href={node.url}
        target="_black"
        rel="noopener"
      >
        <FontAwesomeIcon size={iconSize[size]} icon={socialIcons[node.key]} />
      </a>
    ))}
  </div>
);
