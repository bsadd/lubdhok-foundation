import React from 'react';
import Logo from '../Logo';
import StayConnected from '../StayConnected';

import styles from './footer.module.css';

const Footer = ({ logo, socialMediaLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopSection}>
        <Logo logo={logo} />
        <StayConnected socialMediaLinks={socialMediaLinks} />
      </div>
    </footer>
  );
};

export default Footer;
