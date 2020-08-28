import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Event from '../components/Event';
import styles from './activities.module.css';

class ActivityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityByYear: {},
    };
  }
  componentDidMount() {
    const activities = get(this, 'props.data.allContentfulActivity.edges');
    this.setActivityByYear(activities);
  }

  setActivityByYear(activities) {
    const activityByYear = {};
    activities.map(({ node }) => {
      const date = new Date(node.date);
      const year = date.getFullYear();
      if (!activityByYear[year]) {
        activityByYear[year] = [];
      }
      const isNew = date > new Date();
      activityByYear[year].push({ ...node, isNew });
    });
    this.setState({
      activityByYear,
    });
  }
  render() {
    const siteTitle = get(this.props.data, 'site.siteMetadata.title');
    const { activityByYear } = this.state;
    return (
      <Layout>
        <div className={styles.activityPage}>
          <Helmet title={siteTitle} />

          <h2>Activities</h2>
          {Object.keys(activityByYear)
            .sort((a, b) => b - a)
            .map((year, index) => {
              return (
                <>
                  <h3 className={styles.sticky}>{year}</h3>
                  {activityByYear[year].map((activity, index) => (
                    <Event key={index} event={activity} />
                  ))}
                </>
              );
            })}
        </div>
      </Layout>
    );
  }
}

export default ActivityPage;

export const pageQuery = graphql`
  query ActivityQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulActivity(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          name
          date
          videoUrl
          media {
            fluid {
              src
            }
          }
          venueText
          summary {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
