import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DisplayGPA() {
  const BaseURL = 'http://localhost:5000';
  const [subjects, setSujects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseURL}/api/sub/`)
      .then((result) => setSujects(result.data))
      .catch((err) => console.log(err));
  }, []);

  function getGradeValue(gradeCode, credit) {
    switch (gradeCode) {
      case 'A+':
        return credit * 4.0;
      case 'A':
        return credit * 4.0;
      case 'A-':
        return credit * 3.7;
      case 'B+':
        return credit * 3.3;
      case 'B':
        return credit * 3.0;
      case 'B-':
        return credit * 2.7;
      case 'C+':
        return credit * 2.3;
      case 'C':
        return credit * 2.0;
      case 'C-':
        return credit * 1.7;
      case 'D+':
        return credit * 1.3;
      case 'D':
        return credit * 1.0;
      case 'E':
        return credit * 0;
      default:
        return 0;
    }
  }

  // Calculate the total weighted grade points and total credits
  let totalWeightedGradePoints = 0;
  let totalCredits = 0;
  let totalSubjects = 0;

  subjects.forEach((subject) => {
    const gradeValue = getGradeValue(subject.grade, subject.credit);

    totalWeightedGradePoints += gradeValue;
    totalCredits += subject.credit;
    totalSubjects += 1;
  });

  // Calculate the GPA
  const GPA = totalWeightedGradePoints / totalCredits;

  // Determine the class based on GPA
  let className = '';
  if (GPA >= 3.7) {
    className = 'First Class';
  } else if (GPA >= 3.3) {
    className = 'Second Class (Upper Division)';
  } else if (GPA >= 3.0) {
    className = 'Second Class (Lower Division)';
  } else if (GPA >= 2.0) {
    className = 'General';
  } else {
    className = 'Fail';
  }

  return (
    <div className="d-flex  bg-primary justify-content-center ">
      <div className="container col-md-6 bg-white p-5 mb-5 ">
        <div>
          <p>Total Subjects : {totalSubjects}</p>
          <p>Total Credit : {totalCredits}</p>
          <p>GPA : <span style={{ color: 'red' }}>{GPA.toFixed(2)}</span></p>
          <p >Class: <span style={{ color: 'red' }}>{className}</span></p>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-success">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DisplayGPA;
