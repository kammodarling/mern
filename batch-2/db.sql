create database management;
use management;

CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

INSERT INTO courses (name) VALUES ('DAC'), ('DBDA'), ('DITISS');

CREATE TABLE student (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  dob DATE NOT NULL,
  mobileNo VARCHAR(15) NOT NULL,
  email VARCHAR(100) NOT NULL,
  course_id INT NOT NULL,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT INTO student (name, dob, mobileNo, email, course_id) VALUES
('Amit Sharma', '1998-05-10', '9876543210', 'amit@gmail.com', 1),
('Sneha Kulkarni', '1997-11-23', '9123456789', 'sneha@gmail.com', 2),
('Rohan Patil', '1999-07-15', '9988776655', 'rohan@gmail.com', 3),
('Naman Gupta', '2002-09-28', '8965542369', 'naman@gmail.com', 1),
('Deependra Yadav', '2004-10-22', '9988776655', 'deependra@gmail.com', 2);

CREATE TABLE login (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);