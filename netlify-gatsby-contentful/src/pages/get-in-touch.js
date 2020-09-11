import React from 'react';
import Layout from '../components/Layout';
import { SocialMedialLinks } from '../components/SocialMediaLinks';
import styles from './get-in-touch.module.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class GetInTouchPage extends React.Component {
  render() {

    const style = {
     width: '50%',
     height: '50%'
     }

    return (
      <Layout pageTitle="Get In Touch">
        <div className={styles.getInTouchPage}>
          <h2>Get In Touch</h2>
          <div>
            <h3>Email</h3>
            <span>
              If you have any queries, drop an email to our admin: {` `}
              <a
                href="mailto:contact@lubdhok07.org"
                className={styles.adminEmail}
              >
                contact@lubdhok07.org
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
                291 Elephant Road <br />
                Katabon, Dhaka-1205
              </span>
              <Map 
                 google={this.props.google} 
                 zoom={15}
                 initialCenter={{
                 lat: 23.739340,
                 lng: 90.387038
                 }}
                 style={style}>
                 <Marker />
                 </Map>
          </div>
          <div>
            <h3>Join us and stay connected</h3>
            <SocialMedialLinks size="lg" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyAsfb6LUFK6tTHnj3yHcxgi_vptjMHc9x0')
}) (GetInTouchPage);
