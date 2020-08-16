import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Event from '../components/Event'
import { getLayoutData } from '../utils/data'
import styles from './executive-committee.module.css'

class CommitteePage extends React.Component {
  render() {
    const { siteTitle, logo, socialMediaLinks, navigationLink } = getLayoutData(this.props.data)
    const committeeSections = get(this, 'props.data.allContentfulHomeSection.edges')
    return (
        <Layout
          location={this.props.location}
          logo={logo}
          navigationLink={navigationLink}
          socialMediaLinks={socialMediaLinks}
        >
          <div className={styles.committeePage}>
            <Helmet title={siteTitle} />

            <h4>Committee Members</h4>
            <h5>Convener</h5> 
            <p>Munirul Alam</p>
            <h5>Member Secretary</h5> 
            <p>Shanita Safwat</p>
            <h5>Members</h5>
            <p>Afibuzzaman Anik</p>
            <p>Ashibul Hossain</p>
            <p>Avipriyo Chakrabarty</p>
            <p>Farzana Sharmin</p>
            <p>Ibrahim Ahmed</p>
            <p>Md Ittkan Hossain</p>
            <p>Sabrina Sharmin</p>
            <p>Serniabat Imam Hossain</p>
            <p>Sharif Yousuf</p>
            <p>Shuvro Chakrabarty</p>
          </div>
        </Layout>
    )
  }
}

export default CommitteePage

export const pageQuery = graphql`
  query CommitteeQuery {
    site {
      siteMetadata {
        title
      }
    }
    
    allContentfulNavigationLink(sort: { fields: [id], order: ASC }) {
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
`