import React from 'react';
import styles from './dateComponent.module.css';

const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export default ({ date }) => {
  const dateFormat = new Date(date);
  const month = MONTH[dateFormat.getMonth()];
  const dateNumber = dateFormat.getDate();
  return (
    <div className={styles.dateComponent}>
      <div>{month}</div>
      <div>{dateNumber}</div>
    </div>
  );
};
