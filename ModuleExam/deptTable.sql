use module_exam;

create table department(
	deptID int(10),
    deptName varchar(100)
);

create table student(
	sid int(10) not null primary key,
    sname varchar(100),
    sage int(3),
    deptID int(10)     
);

insert into department values(101, "CS101"), (102, "BTECH-ECE");
insert into department values(103, "ee103");
insert into department values(104, "FDGFFFF");
insert into student values(2001, "Parth", 30, 102);


-- drop table student;
delete from student where sid = (2002);
alter table student add foreign key (deptID) references department(deptID)