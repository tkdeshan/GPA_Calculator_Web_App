import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import AddSubject from './components/AddSubject';
import UpdateSubject from './components/UpdateSubject';

function App() {
  return (
    <div className='bg-primary'>
      <div className="container col-md-6 bg-white rounded p-3">
        <nav class="navbar rounded">
          <div class="container-fluid">
            <h1 class="navbar-brand">GPA Calculator</h1>
            <button class="btn btn-success" type="submit">
              Add +
            </button>
          </div>
        </nav>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<AddSubject />}></Route>
          <Route path="/update/:id" element={<UpdateSubject />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
