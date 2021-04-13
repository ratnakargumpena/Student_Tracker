import React, { useState } from 'react';
import {
  Select, MenuItem,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import StudentCard from '../../Components/StudentCard/StudentCard';
import styles from './Students.module.scss';

const Students = ({
  students, sortStudentsHandler, filterClick, filterStudentsByAge, selectedStudents,
}) => {
  const [age, setAge] = useState('All students');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    filterStudentsByAge(event.target.value);
  };

  const displayStudentsHandler = () => {
    if (filterClick && !selectedStudents.length) {
      return <div className={styles.notFound}>No students in this age group</div>;
    }
    if (!selectedStudents.length) {
      return students.map((student) => (
        <StudentCard
          key={student.email}
          name={student.name}
          gender={`Gender: ${student.gender}`}
          location={`Address: ${student.location}`}
          email={`email: ${student.email}`}
          dob={`Date of Birth: ${student.dob}`}
          age={`Age: ${student.age}`}
          phone={`Contact No.: ${student.phone}`}
          picture={student.picture}
        />
      ));
    }
    if (selectedStudents.length) {
      return selectedStudents.map((student) => (
        <StudentCard
          key={student.email}
          name={student.name}
          gender={`Gender: ${student.gender}`}
          location={`Address: ${student.location}`}
          email={`email: ${student.email}`}
          dob={`Date of Birth: ${student.dob}`}
          age={`Age: ${student.age}`}
          phone={`Contact No.: ${student.phone}`}
          picture={student.picture}
        />
      ));
    }
    return null;
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.filterContainer}>
          <div className={styles.headerText}>Sort students by age</div>
          <button className={styles.sortButton} onClick={sortStudentsHandler} type="button">Sort</button>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.headerText}>Filter students by age</div>
          <Select
            value={age}
            onChange={handleAgeChange}
            className={styles.menu}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              <em>Select</em>
            </MenuItem>
            <MenuItem value="All students">All students</MenuItem>
            <MenuItem value="15-25">15-25</MenuItem>
            <MenuItem value="25-35">25-35</MenuItem>
            <MenuItem value="35-45">35-45</MenuItem>
            <MenuItem value="45-55">45-55</MenuItem>
            <MenuItem value="55+">55+</MenuItem>
          </Select>
        </div>
      </div>

      <div className={styles.studentsContainer}>
        <div className={styles.card}>
          {displayStudentsHandler()}
        </div>
      </div>
    </>
  );
};

Students.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortStudentsHandler: PropTypes.func.isRequired,
  filterClick: PropTypes.bool.isRequired,
  filterStudentsByAge: PropTypes.func.isRequired,
  selectedStudents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Students;
