import React from 'react';
import Label from '../../Label';
import styles from './about.module.scss';

import img from '../../../assets/img/team.jpg';
import Team from './Team';
import OurWorks from './OurWorks';

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.wrapper}>
          <Label>About Us</Label>
          <h1>Picture perfect, video production.</h1>
          <p>
            Our team and process are both designed to give you the best video production experience
            both during and after production.
          </p>
          <img src={img} alt="photo" />
          <OurWorks />
          <Team />
        </div>
      </div>
    </section>
  );
};

export default About;
