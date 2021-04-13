import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => (
  <div className={styles.navBar}>
    <p>
      <span className={styles.bold}>Fictious</span>
      {' High School'}
    </p>
  </div>
);

export default NavBar;
