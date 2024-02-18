import React from 'react';
import { EMPOYEES } from '../../utils/constants';
import Card from './Card';
import styles from './team.module.scss';
import Label from '../../Label';

const Team = () => {
  return (
    <section className={styles.team}>
      <div style={{ textAlign: 'center' }}>
        <Label>Our team</Label>
      </div>
      <div className={styles.teamFlex}>
        {EMPOYEES.map((e) => (
          <Card {...e} key={e.id} />
        ))}
      </div>
    </section>
  );
};

export default Team;
