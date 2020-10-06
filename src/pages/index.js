import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Hero from '../components/HeroContainer';
import Layout from '../components/Layout';
import { LatestNews } from '../components/LatestNews';
import { ActivityTimeline } from '../components/ActivityTimeline';
import HomeSection from '../components/HomeSection';

class HomePage extends React.Component {
  render() {
    const homeSections = get(this.props.data, 'allContentfulHomeSection.edges');

    return (
      <Layout pageTitle="Home">
        <div style={{ background: '#fff' }}>
          <LatestNews />
          <Hero />
          {homeSections.map(({ node }, index) => {
            return (
              <HomeSection
                key={index}
                title={node.title}
                description={node.description}
                reverse={index % 2 === 1}
              />
            );
          })}
          <ActivityTimeline />
        </div>
      </Layout>
    );
  }
}

export default HomePage;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomeSection(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
