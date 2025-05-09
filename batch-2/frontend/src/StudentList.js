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
    <div className="container mt-5">
      <h2>Student Records</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
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
                <button
                  onClick={() => deleteStudent(s.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
