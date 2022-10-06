const fs = require("fs");
const inquirer = require("inquirer");
const db = require("./db");
require("console.table");

//create a fn to init, create a prompt, then type name list, then .then to do a switch, default for quit function

const promptQuestions = [
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

      // "View All Roles",
      // "View All Employees",

      // "Add a Role",
      // "Add an Employee",
      // "Update Employee Role",
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

const init = function () {
  inquirer.prompt(promptQuestions).then((data) => {
    switch (data.startPrompt) {
      case "view_dept":
        viewDepartments();
        break;
      case "add_dept":
        addDepartment();
        break;
      default:
        process.exit();
    }
  });
};

function viewDepartments() {
  // console.log('Hi hello')
  db.findDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
      // init();
    })
    .then(() => init());
}

init();
