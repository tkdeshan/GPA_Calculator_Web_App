import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const BaseURL = 'https://gpa-calculator-web-app-backend.vercel.app';
  const [subjects, setSujects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseURL}/api/sub/`)
      .then((result) => setSujects(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${BaseURL}/api/sub/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteAll = () => {
    axios
      .delete(`${BaseURL}/api/sub/all`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex bg-primary justify-content-center align-items-center ">
      <div className="col-md-6 bg-white p-5 mb-5">
        <button
          className="btn btn-danger mx-1"
          onClick={(e) => handleDeleteAll()}
        >
          Reset
        </button>
        <Link to="/create" className="btn btn-success mx-1">
          Add +
        </Link>
        <Link to="/calculate" className="btn btn-success mx-1">
          Calculate GPA
        </Link>
        <div className="table-responsive mt-3">
          <table className="table">
            <thead>
              <tr>
                <th style={{ backgroundColor: 'lightpink' }}>Subject Code</th>
                <th style={{ backgroundColor: 'lightpink' }}>Subject Name</th>
                <th style={{ backgroundColor: 'lightpink' }}>Grade</th>
                <th style={{ backgroundColor: 'lightpink' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>
                  1 year | 1 semester
                </td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 1 && subject.semester === 1
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subCode}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subName}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.grade}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={(e) => handleDelete(subject._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>
                  1 year | 2 semester
                </td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 1 && subject.semester === 2
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subCode}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subName}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.grade}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={(e) => handleDelete(subject._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>
                  2 year | 1 semester
                </td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 2 && subject.semester === 1
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subCode}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subName}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.grade}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={(e) => handleDelete(subject._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>
                  2 year | 2 semester
                </td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 2 && subject.semester === 2
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subCode}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subName}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.grade}
                    </td>
                    <td>
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={(e) => handleDelete(subject._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>
                  3 year | 1 semester
                </td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 3 && subject.semester === 1
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subCode}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subName}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.grade}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={(e) => handleDelete(subject._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>
                  3 year | 2 semester
                </td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 3 && subject.semester === 2
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subCode}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subName}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.grade}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={(e) => handleDelete(subject._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>
                  4 year | 1 semester
                </td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 4 && subject.semester === 1
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subCode}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subName}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.grade}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={(e) => handleDelete(subject._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'lightblue' }}>
                  4 year | 2 semester
                </td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
                <td style={{ backgroundColor: 'lightblue' }}></td>
              </tr>
            </tbody>
            <tbody>
              {subjects
                .filter(
                  (subject) => subject.year === 4 && subject.semester === 2
                )
                .map((subject) => (
                  <tr key={subject._id}>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subCode}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.subName}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      {subject.grade}
                    </td>
                    <td style={{ backgroundColor: 'lightyellow' }}>
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success mx-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={(e) => handleDelete(subject._id)}
                      >
                        Delete
                      </button>
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
