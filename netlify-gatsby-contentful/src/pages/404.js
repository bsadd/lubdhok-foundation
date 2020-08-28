import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import { SocialMedialLinks } from '../components/SocialMediaLinks';
import styles from './get-in-touch.module.css';

class fourohfourPage extends React.Component {
  render() {
    const siteTitle = get(this.props.data, 'site.siteMetadata.title');
    return (
      <Layout>
        <div className={styles.getInTouchPage}>
          <Helmet title={siteTitle} />
          <h3>
            This page is currently under development. Meanwhile, if you want to
            get in touch:
          </h3>
          <div>
            <h3>Email</h3>
            <span>
              If you have any queries, drop an email to our admin: {` `}
              <a
                href="mailto:lubdhok.foundation@gmail.com"
                className={styles.adminEmail}
              >
                lubdhok.foundation@gmail.com
              </a>
              .
            </span>
            <br />
            <span>We'll get back to you soon. </span>
          </div>
          <div>
            <h3>Join us and stay connected</h3>
            <SocialMedialLinks size="lg"/>
          </div>
        </div>
      </Layout>
    );
  }
}

export default fourohfourPage;

export const pageQuery = graphql`
  query fourohfourQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
