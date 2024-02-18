import React from 'react';
import styles from './socials.module.scss';

const Socials = ({ children }) => {
  return (
    <a href="#" className={styles.icon}>
      {children}
    </a>
  );
};

export default Socials;
