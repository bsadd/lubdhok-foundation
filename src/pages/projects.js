import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styles from './projects.module.css';

class projectsPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Projects">
        <div className={styles.projectsPage}>
          <h3>
            <Link to="/scholarship-2022">
                Shourov Memorial Scholarship 2022
            </Link> 
          </h3>
        </div>
      </Layout>
    );
  }
}

export default projectsPage;
