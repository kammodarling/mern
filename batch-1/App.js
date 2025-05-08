import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [student, setStudent] = useState({ name: '', email: '', course: '', address: '', mobile: '', dob: '' });
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const res = await axios.get('http://localhost:5000/students');
    setStudents(res.data);
  };

  useEffect(() => { getStudents(); }, []);

  const addStudent = async () => {
    if (!student.name || !student.email) {
      alert('Name and Email are required!');
      return;
    }
    await axios.post('http://localhost:5000/students', student);
    setStudent({ name: '', email: '', course: '', address: '', mobile: '', dob: '' });
    getStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    getStudents();
  };

  return (
    <div className="container mt-4">
      <h2>Student Record</h2>
      <div className="mb-3">
        <input className="form-control my-1" placeholder="Name" value={student.name} onChange={e => setStudent({ ...student, name: e.target.value })} />
        <input className="form-control my-1" placeholder="Email" value={student.email} onChange={e => setStudent({ ...student, email: e.target.value })} />
        <input className="form-control my-1" placeholder="Course" value={student.course} onChange={e => setStudent({ ...student, course: e.target.value })} />
        <input className="form-control my-1" placeholder="Address" value={student.address} onChange={e => setStudent({ ...student, address: e.target.value })} />
        <input className="form-control my-1" placeholder="Mobile" value={student.mobile} onChange={e => setStudent({ ...student, mobile: e.target.value })} />
        <input className="form-control my-1" type="date" value={student.dob} onChange={e => setStudent({ ...student, dob: e.target.value })} />
        <button className="btn btn-primary mt-2" onClick={addStudent}>Add Student</button>
      </div>

      <table className="table table-bordered">
        <thead><tr><th>Name</th><th>Email</th><th>Course</th><th>Actions</th></tr></thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => deleteStudent(s.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
