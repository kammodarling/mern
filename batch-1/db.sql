DROP DATABASE student_db;
CREATE DATABASE student_db;

USE student_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50), 
    email VARCHAR(50), 
    course VARCHAR(50), 
    address TEXT, 
    mobile VARCHAR(15), 
    dob DATE
);

INSERT INTO students (name, email, course, address, mobile, dob) VALUES
    ('Ananya Sharma', 'ananya.sharma@example.com',     'Computer Science',     'Delhi', '9876543210', '2002-08-15'),
    ('Ravi Kumar',    'ravi.kumar@example.com',  'Mechanical Engineering',      'Pune', '9765432109', '2001-06-21'),
    ('Meena Patel',   'meena.patel@example.com', 'Information Technology', 'Ahmedabad', '9898765432', '2003-01-10'),
    ('Arjun Mehta',   'arjun.mehta@example.com',            'Electronics',    'Mumbai', '9123456789', '2000-11-05'),
    ('Pooja Reddy',   'pooja.reddy@example.com',      'Civil Engineering', 'Hyderabad', '9988776655', '2002-03-18');
