import React from 'react';
import { SocialMedialLinks } from '../SocialMediaLinks';
import styles from './stayConnected.module.css';

export default ({ socialMediaLinks }) => (
  <div className={styles.followUs}>
    <h3>Stay connected</h3>
    <div>
      <span>Join us on social media</span>
      <SocialMedialLinks socialMediaLinks={socialMediaLinks} />
    </div>
  </div>
);
