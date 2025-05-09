import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [data, setData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.username || !data.email || !data.password) return alert('All fields are required');
    try {
      await axios.post('http://localhost:5000/api/register', data);
      alert('Registered successfully');
    } catch (err) {
      alert('Error registering');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={e => setData({ ...data, username: e.target.value })} /><br />
        <input type="email" placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} /><br />
        <input type="password" placeholder="Password" onChange={e => setData({ ...data, password: e.target.value })} /><br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
