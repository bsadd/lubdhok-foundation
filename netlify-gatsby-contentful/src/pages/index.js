import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/HeroContainer'
import Layout from '../components/Layout'
import HomeSection from '../components/HomeSection'
import { getLayoutData } from '../utils/data'

class HomePage extends React.Component {
  render() {
    const { siteTitle, logo, socialMediaLinks, navigationLink } = getLayoutData(this.props.data)
    const homeSections = get(this, 'props.data.allContentfulHomeSection.edges')
    const [heroContainer] = get(this,'props.data.allContentfulHeroContainer.edges')

    return (
        <Layout
          location={this.props.location}
          logo={logo}
          navigationLink={navigationLink}
          socialMediaLinks={socialMediaLinks}
        >
          <div style={{ background: '#fff' }}>
            <Helmet title={siteTitle} />
            <Hero data={heroContainer.node} />
            {
              homeSections.map(({ node }, index) => {
                return (
                <HomeSection
                  key={index}
                  title={node.title}
                  description={node.description}
                  reverse={index % 2 === 1}
                />
              )
              })
            }
          </div>
        </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulNavigationLink(sort: { fields: [id], order: DESC }) {
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
`
