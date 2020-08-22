import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import Footer from '../Footer';

import styles from './layout.module.css';
import './base.css';
import 'animate.css/animate.min.css';

class Template extends React.Component {
  render() {
    const { children, logo, navigationLink, socialMediaLinks } = this.props;

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
  }
}

export default Template;
