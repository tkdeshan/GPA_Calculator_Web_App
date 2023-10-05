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
    <div className="d-flex bg-primary justify-content-center align-items-center">
      <div className="col-md-6 bg-white rounded p-3">
        <button className='btn btn-danger' onClick={(e) => handleDeleteAll()}>Reset</button>
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <Link to="/calculate" className="btn btn-success">
          Calculate GPA
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
                <td style={{ backgroundColor: 'lightblue' }}>
                  1 year | 1 semester
                </td>
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
                    <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                      className="btn btn-danger"
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
                    <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                      className="btn btn-danger"
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
                    <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                      className="btn btn-danger"
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
                    <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                      className="btn btn-danger"
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
                    <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                      className="btn btn-danger"
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
                    <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                      className="btn btn-danger"
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
                    <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                      className="btn btn-danger"
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
                      <Link
                        to={`/update/${subject._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                      className="btn btn-danger"
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
