import React from 'react';
import styles from './job.module.scss';
import Label from '../../Label';

const Job = ({ img, label, title, desc, moreInfo, works }) => {
  return (
    <section className={styles.job}>
      <div className={styles.general}>
        <Label>{label}</Label>
        <h1>{title}</h1>
        <p>{desc}</p>
        <br />
        {moreInfo && <p>{moreInfo}</p>}
        <ul>
          {works.map((work, i) => (
            <li key={i}>
              <h5>{work.name}</h5>
              <p>{work.about}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.photo}>
        <img src={img} alt="photo" />
      </div>
    </section>
  );
};

export default Job;
