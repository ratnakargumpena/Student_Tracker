import React from 'react';
import PropTypes from 'prop-types';
import styles from './StudentCard.module.scss';

const StudentCard = ({
  name, gender, location, email, dob, age, phone, picture,
}) => (
  <div className={styles.card}>
    <img src={picture} alt={name} />
    <div className={styles.content}>
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.gender}>{gender}</div>
        <div className={styles.dob}>{dob}</div>
        <div className={styles.age}>{age}</div>
        <div className={styles.location}>{location}</div>
        <div className={styles.phone}>{phone}</div>
      </div>
    </div>
  </div>
);

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default StudentCard;
