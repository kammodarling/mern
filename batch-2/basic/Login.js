import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', data);
      localStorage.setItem('token', res.data.token);
      navigate('/students');
    } catch (err) {
      alert('Invalid login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" onChange={e => setData({ ...data, username: e.target.value })} /><br />
        <input type="password" placeholder="Password" onChange={e => setData({ ...data, password: e.target.value })} /><br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
