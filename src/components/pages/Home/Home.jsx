import React from 'react';
import styles from '../../../styles/banner.module.scss';
import Button from '../../Button';
import Player from '../../Player';
import Label from '../../Label';
import GetContact from './GetContact';
import OurProjects from './OurProjects';
import Partners from './Partners';
const Home = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <Label>Welcome</Label>
              <h1>Let’s make your project a success</h1>
              <p>
                Listed as one of Toronto's top Video Production Companies, SPG Media is known for
                our award winning video production style specializing in creating high-quality film
                content.
              </p>
              <div className={styles.controls}>
                <Button>Let's get started</Button>
              </div>
            </div>
            <div className={styles.video}>
              <Player width="500px" />
            </div>
          </div>
        </div>
      </section>
      <OurProjects />
      <Partners />
      <GetContact />
    </>
  );
};

export default Home;
