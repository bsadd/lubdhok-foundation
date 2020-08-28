import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import styles from './objectives.module.css';

class ObjectivesPage extends React.Component {
  render() {
    const siteTitle = get(this.props.data, 'site.siteMetadata.title');
  
    return (
      <Layout>
        <div className={styles.objectivesPage}>
          <Helmet title={siteTitle} />

          <h4>Our Objectives</h4>
          <ul>
          <li> To bring all the alumni of Bangladesh University of Engineering & Technology (BUET) batch 2007 on a 
          common platform for lending their professional expertise and experience to serve Bangladesh. </li>
          <li> To engage in charitable purposes and social welfare activities on a strictly non-profit basis. </li>
          <li> To provide aid (financial, technological, and voluntary) to the distressed people in need of education, medical, 
          and financial support. </li>
          <li> To Provide relief to the people affected by natural and manmade disasters and assist in their rehabilitation and development. </li>
          <li> To provide financial aid and/or loan with prior approval of the members of the executive committee of the Society to the 
          members of the Society and/or their family under the circumstances of emergency medical treatments, bankruptcy, financial crisis 
          due natural disasters, sudden death, etc. </li>
          <li> To provide grants, stipends, academic scholarship, and fellowships and to sponsor a significant number of brilliant and 
          poor students based on proper evidence of their needs. </li>
          <li> To Provide or lend technical support, engineering expertise, and innovative solutions to serve charitable causes and resolve 
          crises. </li>
          <li> To cooperate, assist, and engage in joint programs with organizations and agencies seeking relief, rehabilitation, and development 
          in Bangladesh and any purpose aligned with the Society's goals.</li>
          <li> To set up educational, health, industrial, business, financial institutions subject to the approval by the benefit of the Society.</li>
          <li> To organize appropriate social events and activities such as seminars, meetings, online sessions, conferences, etc. can also cover 
          diverse fields such as art, literature, science, and other knowledge base education.</li>
        </ul>
        </div>
      </Layout>
    );
  }
}

export default ObjectivesPage;

export const pageQuery = graphql`
  query ObjectivesQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
