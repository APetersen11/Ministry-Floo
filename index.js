// TO DO: add dept, add role, add employee, update employee

const fs = require("fs");
const inquirer = require("inquirer");
const { connection } = require("./db");
const db = require("./db");
require("console.table");

const promptQuestions = {
  type: "list",
  name: "startPrompt",
  message: "What would you like to do?",
  choices: [
    {
      name: "View All Departments",
      value: "view_dept",
    },
    {
      name: "Add a Department",
      value: "add_dept",
    },
    {
      name: "View All Roles",
      value: "view_roles",
    },
    {
      name: "View All Employees",
      value: "view_employees",
    },
    {
      name: "Add a Role",
      value: "add_role",
    },
    {
      name: "Add an Employee",
      value: "add_employee",
    },
    {
      name: "Update Employee Role",
      value: "update_employee",
    },
    {
      name: "EXIT",
      value: "exit_app",
    },
  ],
};

// Add Department Questions
const departmentQ = [
  {
    type: "input",
    name: "name",
    message: "What is the department's name?",
  },
];

// Add Role Questions
const roleQ = [
  {
    type: "input",
    name: "title",
    message: "What is the name of the new role?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary of the new role?",
  },
  {
    type: "input",
    name: "department_id",
    message: "What is the department id of the new role?",
  },
];

// Add employee questions
const employeeQ = [
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "las_name",
    message: "What is the employee's last name?",
  },
  {
    type: "input",
    name: "role_id",
    message: "What is the employee's role id?",
  },
  {
    type: "input",
    name: "manager_id",
    message: "What is the employee's manager's id?",
  },
];

// Start application
const init = function () {
  inquirer.prompt(promptQuestions).then((data) => {
    switch (data.startPrompt) {
      case "view_dept":
        viewDepartments();
        break;
      case "add_dept":
        addDepartment();
        break;
      case "view_roles":
        viewRoles();
        break;
      case "view_employees":
        viewEmployees();
        break;
      case "add_role":
        addRole();
        break;
      case "add_employee":
        addEmployee();
        break;
      case "update_employee":
        updateEmployee();
        break;
      case "EXIT":
        exitApp();
        return;
      default:
        process.exit();
    }
  });
};

// View all Departments
function viewDepartments() {
  db.findDepartments().then(([rows]) => {
    let departments = rows;
    console.table(departments);
  });
}

// Add a Department
function addDepartment() {
  inquirer.prompt(departmentQ).then((data) => {
    db.addDepartments(data);
  });
}

// View all Roles
function viewRoles() {
  db.findRoles().then(([rows]) => {
    let roles = rows;
    console.table(roles);
  });
}

// Add a Role
function addRole() {
  inquirer.prompt(roleQ).then((data) => {
    db.addRoles(data);
  });
}

// View all Employees
function viewEmployees() {
  db.findEmployees().then(([rows]) => {
    let employees = rows;
    console.table(employees);
  });
}

// Add an Employee
function addEmployee() {
  inquirer.prompt(employeeQ).then((data) => {
    db.addEmployee(data);
  });
}

// Exit function
function exitApp() {
  connection.end();
}

// app start
init();
