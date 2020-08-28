import React from 'react';
import styles from './navigation.module.css';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import { useMedia } from '../../hooks/useMedia';
import Logo from '../Logo';

export default ({ logo, navigationLink }) => {
  const { tab } = useMedia();
  return (
    <nav role="navigation" className={styles.sticky}>
      <div className={styles.navigation}>
        <Logo logo={logo} />
        {tab ? (
          <MobileNavigation navigationLink={navigationLink} />
        ) : (
          <DesktopNavigation navigationLink={navigationLink} />
        )}
      </div>
    </nav>
  );
};
