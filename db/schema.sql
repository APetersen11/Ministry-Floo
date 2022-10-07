
DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

-- department table
CREATE TABLE department (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(250) NOT NULL
 );

-- roles table
CREATE TABLE roles (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(50) NOT NULL,
 salary DECIMAL(9,2),
 department_id INTEGER,
 FOREIGN KEY (department_id) REFERENCES department(id)
 );

-- employee table
CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  manager_id INTEGER,
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);