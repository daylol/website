import React from 'react';
import styles from './getContact.module.scss';
import Button from '../../Button';
import { Link } from 'react-router-dom';
const GetContact = () => {
  return (
    <div className="container">
      <div className={styles.banner}>
        <h2>Let's make something awesome together.</h2>
        <Link to="/contact">
          <Button>Let's connect</Button>
        </Link>
      </div>
    </div>
  );
};

export default GetContact;
