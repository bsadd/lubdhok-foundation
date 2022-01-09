import React from 'react';
import sonaliBankLogo from './sonali_bank.jpeg';
import styles from './donation-method.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export const DonationMethod = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={sonaliBankLogo} className={styles.logo} />
        <FontAwesomeIcon icon={faCopy} size='lg' color='grey' />
      </div>
      <div className={styles.content}>
          Bank Name: Sonali Bank Limited
          <br />
          Bank Branch: BUET
          <br />
          Account Name: Lubdhok’07 Foundation
          <br />
          Account number: 4404002000835
          <br />
          Routing No: 200270522
      </div>
    </div>
  )
}