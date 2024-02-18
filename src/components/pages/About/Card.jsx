import React from 'react';
import styles from './card.module.scss';

const Card = ({ photo, name, position }) => (
  <div className={styles.card}>
    <img src={photo} alt="empolyee" />
    <h3>{name}</h3>
    <p>{position}</p>
  </div>
);

export default Card;
