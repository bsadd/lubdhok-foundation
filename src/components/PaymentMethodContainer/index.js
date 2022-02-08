import React from 'react';
import sonaliBankLogo from './sonali_bank.jpeg';
import styles from './payment-method-container.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { usePaymentMethodData } from './query';

const PaymentMethod = ({ id, name, description, logo}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} />
        <FontAwesomeIcon icon={faCopy} size='lg' color='grey' />
      </div>
      <div className={styles.content}>
          {name}
          <div 
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
      </div>
    </div>
  )
};

export const PaymentMethodContainer = () => {
  const paymentMethods = usePaymentMethodData();
  if(!paymentMethods || !paymentMethods.length) {
    return null;
  }
  return (
    <div className={styles.container}>
      {
        paymentMethods.map((method) => <PaymentMethod {...method} />)
      }
    </div>
  )
}