import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import styles from './objectives.module.css';

class ObjectivesPage extends React.Component {
  render() {
    const legals = get(
      this.props.data,
      'allContentfulLegal.edges[0].node.text.json'
    );

    return (
      <Layout pageTitle="Objectives">
        <div className={styles.objectivesPage}>
          <h4>Our Objectives</h4>
          {documentToReactComponents(legals)}
        </div>
      </Layout>
    );
  }
}

export default ObjectivesPage;

export const pageQuery = graphql`
  query ObjectivesQuery {
    allContentfulLegal(filter: { title: { eq: "objectives" } }) {
      edges {
        node {
          title
          text {
            json
          }
        }
      }
    }
  }
`;
