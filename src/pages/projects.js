import React from 'react';
import Layout from '../components/Layout';
import { SocialMedialLinks } from '../components/SocialMediaLinks';
import styles from './projects.module.css';

class fourohfourPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Projects">
        <div className={styles.projectsPage}>
          <h3>
            <a href="https://www.lubdhok07.org/scholarship"
              >
                Shourov Memorial Scholarship 2021
              </a> 
          </h3>
        </div>
      </Layout>
    );
  }
}

export default projectsPage;
