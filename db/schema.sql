
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;


-- department table
-- id: INT PRIMARY KEY
-- name: VARCHAR(30) to hold department name
CREATE TABLE department (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(50) NOT NULL
 );

-- roles table
-- id: INT PRIMARY KEY
-- title: VARCHAR(30) to hold role title
-- salary: DECIMAL to hold role salary
-- department_id: INT to hold reference to department role belongs to
CREATE TABLE roles (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(50) NOT NULL,
 salary DECIMAL(5,2)
 department_id: INTEGER,
 );

-- employee table
-- id: INT PRIMARY KEY
-- first_name: VARCHAR(30) to hold employee first name
-- last_name: VARCHAR(30) to hold employee last name
-- role_id: INT to hold reference to employee role
-- manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
);