

// import React, { useState, useEffect } from 'react';

// const AddStudent = () => {
//   const [studentId, setStudentId] = useState('');
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [deptID, setDepartment] = useState('');
//   const [studentData, setStudentData] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [submissionStatus, setSubmissionStatus] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/getDept');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("API Response (Departments):", data);

//         if (data && data.success && Array.isArray(data.data)) {
//           setStudentData(data.data);
//         } else if (data && !data.success) {
//           setError(data.message || 'Failed to load department data');
//         } else {
//           setError('Department data format incorrect: Expected an array in data.data');
//         }
//       } catch (err) {
//         setError('Error fetching department data: ' + err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log("studentData (Departments):", studentData);

//   //user-input data 
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'studentId':
//         setStudentId(value);
//         break;
//       case 'name':
//         setName(value);
//         break;
//       case 'age':
//         setAge(value);
//         break;
//       case 'deptID':
//         setDepartment(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const sendData = async () => {
//     setSubmissionStatus('Submitting...');
//     try {
//       const student = {
//         id: studentId, 
//         name: name,
//         age: parseInt(age),
//         deptID: parseInt(deptID), 
//       };

//       const response = await fetch('http://localhost:5000/DeptToStudent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(student),

//       });
//       console.log("Sending student data:", student);
//       const data = await response.json();
//       console.log("API Response (Add Student):", data);

//       if (data.success) {
//         setSubmissionStatus('Student added successfully!');
//         // Optionally clear the form fields
//         setStudentId('');
//         setName('');
//         setAge('');
//         setDepartment('');
//       } else {
//         setSubmissionStatus(`Submission failed: ${data.message || 'Unknown error'}`);
//       }
//     } catch (err) {
//       setSubmissionStatus('Error submitting data: ' + err.message);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Add Student</h1>
//       <div className="mb-3">
//         <label htmlFor="studentId" className="form-label">Student ID</label>
//         <input
//           type="text"
//           className="form-control"
//           name="studentId"
//           id="studentId"
//           aria-describedby="studentIdHelp"
//           placeholder=""
//           value={studentId}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           name="name"
//           id="name"
//           aria-describedby="nameHelp"
//           placeholder=""
//           value={name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">Age</label>
//         <input
//           type="text"
//           className="form-control"
//           name="age"
//           id="age"
//           aria-describedby="ageHelp"
//           placeholder=""
//           value={age}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="dropdown">
//         <label htmlFor="department">Department:</label>
//         <select
//           id="department"
//           name="department"
//           className="form-select"
//           value={deptID}
//           onChange={handleInputChange}
//         >
//           <option value="">Select Department</option>
//           {studentData.map((dept) => (
//             <option key={dept.deptID} value={dept.deptID}>
//               {dept.deptName}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         type="button"
//         className="btn btn-primary mt-3"
//         onClick={sendData}
//       >
//         Submit
//       </button>
//       {submissionStatus && <p className="mt-2">{submissionStatus}</p>}
//     </div>
//   );
// };

// export default AddStudent;

import React, { useState, useEffect } from 'react';

const AddStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [deptID, setDepartment] = useState('');
  const [departmentData, setDepartmentData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getDept');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response (Departments):", data);

        if (data && data.success && Array.isArray(data.data)) {
          setDepartmentData(data.data);
        } else if (data && !data.success) {
          setError(data.message || 'Failed to load department data');
        } else {
          setError('Department data format incorrect: Expected an array in data.data');
        }
      } catch (err) {
        setError('Error fetching department data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("departmentData (Departments):", departmentData);

  //user-input data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'studentId':
        setStudentId(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      default:
        break;
    }
  };

  const sendData = async () => {
    setSubmissionStatus('Submitting...');
    try {
      const student = {
        id: studentId,
        name: name,
        age: parseInt(age),
        deptID: parseInt(deptID),
      };

      const response = await fetch('http://localhost:5000/DeptToStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),

      });
      console.log("Sending student data:", student);
      const data = await response.json();
      console.log("API Response (Add Student):", data);

      if (data.success) {
        setSubmissionStatus('Student added successfully!');
        // Optionally clear the form fields
        setStudentId('');
        setName('');
        setAge('');
        setDepartment('');
      } else {
        setSubmissionStatus(`Submission failed: ${data.message || 'Unknown error'}`);
      }
    } catch (err) {
      setSubmissionStatus('Error submitting data: ' + err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Add Student</h1>
      <div className="mb-3">
        <label htmlFor="studentId" className="form-label">Student ID</label>
        <input
          type="text"
          className="form-control"
          name="studentId"
          id="studentId"
          aria-describedby="studentIdHelp"
          placeholder=""
          value={studentId}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          aria-describedby="nameHelp"
          placeholder=""
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          type="text"
          className="form-control"
          name="age"
          id="age"
          aria-describedby="ageHelp"
          placeholder=""
          value={age}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="department" className="form-label">Department:</label>
        <select
          id="department"
          name="department"
          className="form-select"
          value={deptID}
          onChange={handleInputChange}
        >
          <option value="">Select Department</option>
          {departmentData.map((dept) => (
            <option key={dept.deptID} value={dept.deptID}>
              {dept.deptName}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={sendData}
      >
        Submit
      </button>
      {submissionStatus && <p className="mt-2">{submissionStatus}</p>}
    </div>
  );
};

export default AddStudent;