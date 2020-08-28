import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Member from '../components/Member';
import { getLayoutData } from '../utils/data';
import styles from './executive-committee.module.css';

class CommitteePage extends React.Component {
  render() {
    const { siteTitle, logo, socialMediaLinks, navigationLink } = getLayoutData(
      this.props.data
    );
    const members = get(this, 'props.data.allContentfulCommittee.edges');

    return (
      <Layout
        location={this.props.location}
        logo={logo}
        navigationLink={navigationLink}
        socialMediaLinks={socialMediaLinks}
      >
        <div className={styles.committeePage}>
          <Helmet title={siteTitle} />

          <h2>Committee Members</h2>
          {members.map(({ node: member }, index) => (
            <Member key={index} member={member} reverse={index % 2 == 1} />
          ))}
        </div>
      </Layout>
    );
  }
}

export default CommitteePage;

export const pageQuery = graphql`
  query CommitteeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCommittee(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          order
          name
          title
          details {
            childMarkdownRemark {
              html
            }
          }
          photo {
            fluid {
              src
            }
          }
        }
      }
    }
    allContentfulNavigationLink(sort: { fields: [order], order: DESC }) {
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
          image {
            fluid {
              src
            }
          }
          alt
        }
      }
    }
  }
`;
