const fs = require("fs");
const inquirer = require("inquirer");

const promptQuestions = [
  {
    type: "list",
    name: "startPrompt",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update Employee Role",
    ],
  },
];

// const allDepartments =

// const allRoles =

// const allEmployees=

const addDepartment = [
  {
    type: "input",
    name: "addDepartment",
    message: "What is the department's name?",
  },
];

const addRole = [
  {
    type: "input",
    name: "addName",
    message: "What is the name of the new role?",
  },
  {
    type: "input",
    name: "addSalary",
    message: "What is the salary of the new role?",
  },
  {
    type: "input",
    name: "addDepart",
    message: "What is the department of the new role?",
  },
];

const addEmployee = [
    {
      type: "input",
      name: "addFirstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "addLastName",
      message: "What is the employee's last name?",
    },
    {
      type: "input",
      name: "addRole",
      message: "What is the employee's role?",
    },
    {
        type: "input",
        name: "addManager",
        message: "Who is the employee's manager?",
      },
  ];
  
// const updateEmployee=
