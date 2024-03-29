import React from 'react';
import Layout from '../components/Layout';
import { SocialMedialLinks } from '../components/SocialMediaLinks';
import styles from './get-in-touch.module.css';
import GoogleMap from '../components/GoogleMap';

class GetInTouchPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Get In Touch">
        <div className={styles.getInTouchPage}>
          <h2>Get In Touch</h2>
          <div className={styles.getInTouchContainer}>
            <div className={styles.getInTouchCol}>
              <div>
                <h3>Email</h3>
                <span>
                  If you have any queries, drop an email to our admin: {` `}
                  <a
                    href="mailto:lubdhok.foundation@gmail.com"
                    className={styles.adminEmail}
                  >
                    lubdhok.foundation@gmail.com
                  </a>
                  .
                </span>
                <br />
                <span>We'll get back to you soon. </span>
              </div>
              <div>
                <h3>Mailing Address</h3>
                <span>
                  Lubdhok'07 Foundation <br />
                  18, Kazi Nazrul Islam Avenue, Shahbag, Dhaka-1000
                </span>
              </div>
              <div>
                <h3>Join us and stay connected</h3>
                <SocialMedialLinks />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default GetInTouchPage;
