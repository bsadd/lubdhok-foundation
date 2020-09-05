import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Member from '../components/Member';
import styles from './executive-committee.module.css';

class CommitteePage extends React.Component {
  render() {
    const members = get(this.props.data, 'allContentfulCommittee.edges');

    return (
      <Layout pageTitle="Executive Committee">
        <div className={styles.committeePage}>
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
  }
`;
