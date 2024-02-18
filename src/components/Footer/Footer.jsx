import React from 'react';
import styles from './footer.module.scss';
import FooterLogo from './FooterLogo';
import Socials from '../pages/contact/Socials';
import { InstagramOutlined, FacebookOutlined, VideoCameraOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <footer className="container">
        <div className={styles.wrapper}>
          <FooterLogo />
          <div>
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
      </footer>
    </section>
  );
};

export default Footer;
