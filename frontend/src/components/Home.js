import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const BaseURL = 'http://localhost:5000';
  const [subjects, setSujects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseURL}/api/sub/`)
      .then((result) => setSujects(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex bg-primary justify-content-center align-items-center">
      <div className="col-md-6 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Grade</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>1 year | 1 semester</td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 1 && subject.semester === 1
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td>{subject.subCode}</td>
                    <td>{subject.subName}</td>
                    <td>{subject.grade}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>1 year | 2 semester</td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 1 && subject.semester === 2
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td>{subject.subCode}</td>
                    <td>{subject.subName}</td>
                    <td>{subject.grade}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>2 year | 1 semester</td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 2 && subject.semester === 1
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td>{subject.subCode}</td>
                    <td>{subject.subName}</td>
                    <td>{subject.grade}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>2 year | 2 semester</td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 2 && subject.semester === 2
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td>{subject.subCode}</td>
                    <td>{subject.subName}</td>
                    <td>{subject.grade}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>3 year | 1 semester</td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 3 && subject.semester === 1
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td>{subject.subCode}</td>
                    <td>{subject.subName}</td>
                    <td>{subject.grade}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>3 year | 2 semester</td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 3 && subject.semester === 2
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td>{subject.subCode}</td>
                    <td>{subject.subName}</td>
                    <td>{subject.grade}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>4 year | 1 semester</td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 4 && subject.semester === 1
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td>{subject.subCode}</td>
                    <td>{subject.subName}</td>
                    <td>{subject.grade}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>4 year | 2 semester</td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 4 && subject.semester === 2
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td>{subject.subCode}</td>
                    <td>{subject.subName}</td>
                    <td>{subject.grade}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
