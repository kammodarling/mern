import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <div>
        <Link to="/">Student Records</Link>
        <div>
          <ul>
            <li><Link to="/">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/students">Students</Link></li>
          </ul>
          {localStorage.getItem('token') && (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
