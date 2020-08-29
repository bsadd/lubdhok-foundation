import React from 'react';
import styles from './navigation.module.css';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import { useMedia } from '../../hooks/useMedia';
import Logo from '../Logo';

export default ({ logo, navigationLink }) => {
  const { tab, mobile } = useMedia();
  return (
    <nav role="navigation" className={styles.sticky}>
      <div className={styles.navigation}>
        <Logo logo={logo} lightMode={mobile} />
        {tab || mobile ? (
          <MobileNavigation navigationLink={navigationLink} />
        ) : (
          <DesktopNavigation navigationLink={navigationLink} />
        )}
      </div>
    </nav>
  );
};
