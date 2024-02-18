import React, { useEffect } from 'react';
import Label from '../../Label';
import { LOCATIONS } from '../../utils/constants';
import List from './List';
import styles from './contact.module.scss';
import Socials from './Socials';
import { InstagramOutlined, FacebookOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Form from './Form';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.leftSide}>
            <Label>Contact</Label>
            <h2>Get in touch</h2>
            <p>We'd love to hear from you. Fill in the form and we'll get back to you shortly.</p>
            <div className={styles.locations}>
              {LOCATIONS.map((loc, i) => (
                <List {...loc} key={i} />
              ))}
            </div>
            <div className={styles.follow}>
              <h3>Follow us</h3>
              <div className={styles.group}>
                <Socials>
                  <InstagramOutlined />
                </Socials>
                <Socials>
                  <FacebookOutlined />
                </Socials>
                <Socials>
                  <VideoCameraOutlined />
                </Socials>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
