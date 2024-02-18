import React from 'react';
import styles from './list.module.scss';

const List = ({ zipCode, city, address, email, tel }) => {
  return (
    <div className={styles.items}>
      <h5>{city}</h5>
      {address && <p>{address}</p>}
      {zipCode && <p>{zipCode}</p>}
      {email && (
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
      {tel && (
        <p>
          <i>
            <a href={`tel:${tel}`}>{tel}</a>
          </i>
        </p>
      )}
    </div>
  );
};

export default List;
