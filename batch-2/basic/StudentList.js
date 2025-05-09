import { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/students", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/api/students/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student Records</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.dob}</td>
              <td>{s.mobileNo}</td>
              <td>{s.email}</td>
              <td>{s.courseName}</td>
              <td>
                <button onClick={() => deleteStudent(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
