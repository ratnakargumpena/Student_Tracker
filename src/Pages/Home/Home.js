import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  const history = useHistory();
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heading}>Welcome to the Student Portal</div>
      <div className={styles.body}>
        One place destination to view and manage student information
      </div>
      <button type="button" onClick={() => history.push('/students')}>Student Data</button>

    </div>
  );
};

export default Home;
