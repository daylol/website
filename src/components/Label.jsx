import React from 'react';
import styles from '../styles/label.module.scss';
const Label = ({ children }) => {
  return <span className={styles.label}>{children}</span>;
};

export default Label;
