/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import utilsApi from './utils/api';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Students from './Pages/Students/Students';

const App = () => {
  const [error, setError] = useState(null);
  const [students, setStudents] = useState([]);
  let [sortedStudents, setSortedStudents] = useState([]);
  let [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState(students);
  const [filterClick, setFilterClick] = useState(false);
  const [isLoaded] = useState('false');

  const sortStudentsHandler = () => {
    sortedStudents = selectedStudents.length ? [...selectedStudents] : [...students];
    sortedStudents.sort((a, b) => a.age - b.age);
    setSortedStudents(sortedStudents);
    setSelectedStudents(sortedStudents);
  };

  const filterStudentsByAge = (ageRangeParam) => {
    filteredStudents = [...students];
    let reqdStudents;
    if (ageRangeParam === 'All students') {
      reqdStudents = filteredStudents;
    } else {
      setFilterClick(true);
      const lowerRange = ageRangeParam.slice(0, 2);
      const upperRange = ageRangeParam.slice(3);
      reqdStudents = filteredStudents.filter(
        (student) => (
          upperRange
            ? student.age >= lowerRange && student.age < upperRange
            : student.age >= lowerRange),
      );
    }
    setFilteredStudents(reqdStudents);
    setSelectedStudents(reqdStudents);
  };

  useEffect(async () => {
    try {
      const studentsData = await utilsApi.getStudentsInfo();
      const newComponents = studentsData.map((eachStudent) => {
        const newStudent = {};
        newStudent.gender = eachStudent.gender;
        newStudent.age = eachStudent.dob.age;
        newStudent.name = `${eachStudent.name.title}. ${eachStudent.name.first} ${eachStudent.name.last}`;
        newStudent.location = `${eachStudent.location.street.number}, ${eachStudent.location.street.name}, ${eachStudent.location.city}, ${eachStudent.location.state}`;
        newStudent.email = eachStudent.email;
        newStudent.dob = eachStudent.dob.date.slice(0, 10);
        newStudent.phone = eachStudent.phone;
        newStudent.picture = eachStudent.picture.large;
        return newStudent;
      });
      setStudents(newComponents);
    } catch (e) {
      setError(e);
    }
  }, []);

  if (error !== null) {
    return (
      <div>error.message</div>
    );
  }
  if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/students">
            <Students
              students={students}
              selectedStudents={selectedStudents}
              sortStudentsHandler={sortStudentsHandler}
              filterClick={filterClick}
              filterStudentsByAge={filterStudentsByAge}
            />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
