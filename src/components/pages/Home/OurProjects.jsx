import React from 'react';
import { CASES } from '../../utils/constants';
import Project from './Project';
import styles from './ourProjects.module.scss';
import Label from '../../Label';

const OurProjects = () => {
  return (
    <section className={styles.cases}>
      <div className="container">
        <div className={styles.text}>
          <Label>Case studies</Label>
          <h2>How we've helped our clients</h2>
        </div>
        <div className={styles.videos}>
          {CASES.map((project) => (
            <Project {...project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
