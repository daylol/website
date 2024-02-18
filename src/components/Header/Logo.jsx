import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/header.module.scss';
const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <span className={styles.white}>SPG </span>
      <span className={styles.grey}>MEDIA</span>
    </Link>
  );
};

export default Logo;
