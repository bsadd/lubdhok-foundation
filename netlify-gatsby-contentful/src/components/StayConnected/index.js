import React from 'react';
import { SocialMedialLinks } from '../SocialMediaLinks';
import styles from './stayConnected.module.css';

export default ({ socialMediaLinks }) => (
  <div className={styles.followUs}>
    <h3>Stay connected</h3>
    <a href="mailto:lubdhok.foundation@gmail.com" className={styles.adminEmail}>
      lubdhok.foundation@gmail.com
    </a>
    <div>
      <SocialMedialLinks socialMediaLinks={socialMediaLinks} />
    </div>
  </div>
);
