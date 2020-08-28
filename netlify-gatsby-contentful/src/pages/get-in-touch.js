import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import { getLayoutData } from '../utils/data';
import { SocialMedialLinks } from '../components/SocialMediaLinks';
import styles from './get-in-touch.module.css';

class GetInTouchPage extends React.Component {
  render() {
    const { siteTitle, logo, socialMediaLinks, navigationLink } = getLayoutData(
      this.props.data
    );
    return (
      <Layout
        location={this.props.location}
        logo={logo}
        navigationLink={navigationLink}
        socialMediaLinks={socialMediaLinks}
      >
        <div className={styles.getInTouchPage}>
          <Helmet title={siteTitle} />
          <h2>Get In Touch</h2>
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
            <SocialMedialLinks size="lg" socialMediaLinks={socialMediaLinks} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default GetInTouchPage;

export const pageQuery = graphql`
  query GetInTouchQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulNavigationLink(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          name
          url
          icon
        }
      }
    }
    allContentfulSocialMedia {
      edges {
        node {
          key
          url
        }
      }
    }
    allContentfulLogo {
      edges {
        node {
          logoText
          logoLongText
          alt
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
