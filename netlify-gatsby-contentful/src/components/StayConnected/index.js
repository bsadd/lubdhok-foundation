import React from 'react';
import { SocialMedialLinks } from '../SocialMediaLinks';
import styles from './stayConnected.module.css';

export default ({ socialMediaLinks }) => (
  <div className={styles.followUs}>
    <h3>Stay connected</h3>
    <a href="mailto:contact@lubdhok07.org" className={styles.adminEmail}>
      contact@lubdhok07.org
    </a>
    <div>
      <SocialMedialLinks socialMediaLinks={socialMediaLinks} color="grey" />
    </div>
  </div>
);
