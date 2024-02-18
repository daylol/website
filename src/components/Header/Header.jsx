import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Button from '../Button';
import { Link } from 'react-router-dom';
import styles from '../../styles/header.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.mobile}>
            <Navigation />
          </div>
          <Link to="/contact">
            <Button>Let's talk</Button>
          </Link>
          <div className={styles.mobileActive}>
            <MenuOutlined
              style={{
                fontSize: '26px',
              }}
              onClick={showModal}
            />
            <MobileMenu
              isModalOpen={isModalOpen}
              showModal={showModal}
              handleOk={handleOk}
              handleCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
