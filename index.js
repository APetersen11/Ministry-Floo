// error in seeds file
// looping through questions
// add functions
// view roles viewing departments


const fs = require("fs");
const inquirer = require("inquirer");
const db = require("./db");
require("console.table");

const promptQuestions = (
  {
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
  });

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
        break;
      default:
        process.exit();
    }
  });
};

function viewDepartments() {
  db.findDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => init());
}
function viewRoles() {
  db.findRoles()
  .then(([rows]) => {
    let roles = rows;
    console.table(roles);
  })
  .then(() => init());
}

function exitApp() {
  connection.end();
};

init();
  