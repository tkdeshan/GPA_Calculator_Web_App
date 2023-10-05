import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function UpdateSubject() {
  const BaseURL = 'https://gpa-calculator-web-app-backend.vercel.app';
  const { id } = useParams();
  const [subCode, setSubCode] = useState();
  const [subName, setSubName] = useState();
  const [credit, setCredit] = useState();
  const [year, setYear] = useState();
  const [semester, setSemester] = useState();
  const [grade, setGrade] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BaseURL}/api/sub/${id}`)
      .then((result) => {
        console.log(result);
        setSubCode(result.data.subCode);
        setSubName(result.data.subName);
        setCredit(result.data.credit);
        setYear(result.data.year);
        setSemester(result.data.semester);
        setGrade(result.data.grade);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`${BaseURL}/api/sub/${id}`, {
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
    <div className="d-flex  bg-primary justify-content-center">
      <div className="container w-50 bg-white p-5 mb-5">
        <form onSubmit={Update}>
          <h2>Update Subject</h2>
          <div className="mb-2">
            <label>Subject Code</label>
            <input
              type="text"
              className="form-control"
              value={subCode}
              onChange={(e) => setSubCode(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Subject Name</label>
            <input
              type="text"
              className="form-control"
              value={subName}
              onChange={(e) => setSubName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Credit</label>
            <input
              type="number"
              className="form-control"
              value={credit}
              onChange={(e) => setCredit(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Year</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option selected>Select year</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
          </div>
          <div className="mb-2">
            <label>Semester</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option selected>Select semester</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="mb-2">
            <label>Grade</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
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
          <div className="container d-flex justify-content-end">
            <Link to="/" className="btn btn-success mx-1">
              Back
            </Link>
            <button className="btn btn-success mx-1">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateSubject;
