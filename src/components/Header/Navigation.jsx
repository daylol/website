import React, { useState, useEffect } from 'react';
import { MENU } from '../utils/constants';
import styles from '../../styles/header.module.scss';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
  const [active, setActive] = useState(0);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') {
      setActive(null);
    }
    if (location.pathname === '/') {
      setActive(0);
    }
  }, [location]);
  return (
    <nav className={styles.nav}>
      <ul>
        {MENU.map((menu, i) => (
          <li className={active === i ? styles.active : null} onClick={() => setActive(i)} key={i}>
            <Link to={`${menu.link}`}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
