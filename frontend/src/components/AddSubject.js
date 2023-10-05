import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddSubject() {
  const BaseURL = 'http://localhost:5000';
  const [subCode, setSubCode] = useState();
  const [subName, setSubName] = useState();
  const [credit, setCredit] = useState();
  const [year, setYear] = useState();
  const [semester, setSemester] = useState();
  const [grade, setGrade] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(`${BaseURL}/api/sub`, {
        subCode,
        subName,
        credit,
        year,
        semester,
        grade,
      })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Subject</h2>
          <div className="mb-2">
            <label>Subject Code</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setSubCode(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Subject Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setSubName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Credit</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setCredit(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Year</label>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setYear(e.target.value)}>
              <option selected>Select year</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
          </div>
          <div className="mb-2">
            <label>Semester</label>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setSemester(e.target.value)}>
              <option selected>Select semester</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="mb-2">
            <label>Grade</label>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setGrade(e.target.value)}>
              <option selected>Select grade</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddSubject;
