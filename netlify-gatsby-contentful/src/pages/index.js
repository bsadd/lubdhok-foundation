import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Hero from '../components/HeroContainer';
import Layout from '../components/Layout';
import { LatestNews } from '../components/LatestNews';
import { ActivityTimeline } from '../components/ActivityTimeline';
import HomeSection from '../components/HomeSection';

class HomePage extends React.Component {
  render() {
    const siteTitle = get(this.props.data, 'site.siteMetadata.title');
    const homeSections = get(this.props.data, 'allContentfulHomeSection.edges');
    const [heroContainer] = get(
      this.props.data,
      'allContentfulHeroContainer.edges'
    );

    return (
      <Layout>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <LatestNews />
          <Hero data={heroContainer.node} />
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
    site {
      siteMetadata {
        title
      }
    }
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
    allContentfulHeroContainer {
      edges {
        node {
          title
          shortDescription
          backgroundImage {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
