import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AddSubject from './components/AddSubject';
import UpdateSubject from './components/UpdateSubject';
import DisplayGPA from './components/DisplayGPA';


function App() {
  return (
    <div className='bg-primary'>
      <div className="container col-md-6 bg-black rounded p-3">
        <nav class="navbar rounded">
          <div class="container-fluid justify-content-center">
          <h1 className="navbar-brand" style={{ color: 'white' }}>GPA Calculator</h1>
          </div>
        </nav>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calculate" element={<DisplayGPA />}></Route>
          <Route path="/create" element={<AddSubject />}></Route>
          <Route path="/update/:id" element={<UpdateSubject />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
