import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.css';

export default ({ navigationLink }) => (
  <ul>
    {navigationLink.map(({ node }, index) => (
      <li className={styles.navigationItem} key={index}>
        <Link to={node.url}>{node.name}</Link>
      </li>
    ))}
  </ul>
);
