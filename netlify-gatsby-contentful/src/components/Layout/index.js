import React, { useEffect } from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { initGA, logPageView } from '../../utils/analytics';
import { useLogo } from './query/logoQuery';
import { useNavigationLink } from './query/navigationQuery';
import { useSocialMedia } from './query/socialMediaQuery';

import styles from './layout.module.css';
import './base.css';
import 'animate.css/animate.min.css';

const Layout = ({ children }) => {
  const logo = useLogo();
  const navigationLink = useNavigationLink();
  const socialMediaLinks = useSocialMedia();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`;
  }

  return (
    <Container>
      <Navigation logo={logo} navigationLink={navigationLink} />
      <div className={styles.layoutContent}>{children}</div>
      <Footer logo={logo} socialMediaLinks={socialMediaLinks} />
    </Container>
  );
};

export default Layout;
