import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import StudentList from './StudentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </Router>
  );
}


export default App;
