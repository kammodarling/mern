// import logo from './logo.svg';
import './App.css';
import Students from './components/AddStudent';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ShowStudents from './components/ShowStudent';
import AddStudent from './components/AddStudent';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
        
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<AddStudent />} />
        <Route path="/showStudents" element={<ShowStudents />} />
      </Routes>
    </Router>
    );
}

export default App;
