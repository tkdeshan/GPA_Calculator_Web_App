import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import AddSubject from './components/AddSubject';
import UpdateSubject from './components/UpdateSubject';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<AddSubject />}></Route>
          <Route path='/update/:id' element={<UpdateSubject />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
