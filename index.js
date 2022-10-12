const fs = require("fs");
const inquirer = require("inquirer");
const { connection } = require("./db");
const db = require("./db");

require("console.table");

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

// View all Departments
function viewDepartments() {
  db.findDepartments().then(([rows]) => {
    let departments = rows;
    console.table(departments);
    init();
  });
}

// Add a Department
function addDepartment() {
  inquirer.prompt(departmentQ).then((data) => {
    db.addDepartments(data);
    init();
  });
}

// View all Roles
function viewRoles() {
  db.findRoles().then(([rows]) => {
    let roles = rows;
    console.table(roles);
    init();
  });
}

// Add a Role
function addRole() {
  db.findDepartments().then(([departments]) => {
    let departmentChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));
    // Add Role Questions
    console.log(departmentChoices);
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
        type: "list",
        name: "department_id",
        message: "What department does the new role belong to?",
        choices: departmentChoices,
      },
    ];
    inquirer.prompt(roleQ).then((data) => {
      db.addRoles(data);
      init();
    });
  });
}

// View all Employees
function viewEmployees() {
  db.findEmployees().then(([rows]) => {
    let employees = rows;
    console.table(employees);
    init();
  });
}

// Add an Employee
function addEmployee() {
  db.findRoles().then(([roles]) => {
    let roleChoices = roles.map(({ id, title }) => ({
      name: title,
      value: id,
    }));
    db.findEmployees().then(([employees]) => {
      let employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id,
      }));

      // Add employee questions
      const employeeQ = [
        {
          type: "input",
          name: "first_name",
          message: "What is the employee's first name?",
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the employee's last name?",
        },
        {
          type: "list",
          name: "role_id",
          message: "What is the employee's role?",
          choices: roleChoices,
        },
        {
          type: "list",
          name: "manager_id",
          message: "Who is the employee's manager?",
          choices: employeeChoices,
        },
      ];
      inquirer.prompt(employeeQ).then((data) => {
        db.addEmployee(data);
        init();
      });
    });
  });
}

// Update Employee Role
function updateEmployee() {
  db.findEmployees().then(([employees]) => {
    let employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));
    db.findRoles().then(([roles]) => {
      let roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id,
      }));
      const updateEmployeeQ = [
        {
          type: "list",
          name: "employee_id",
          message: "What employee would you like to update?",
          choices: employeeChoices,
        },
        {
          type: "list",
          name: "role_id",
          message: "What is their new role?",
          choices: roleChoices,
        },
      ];
      inquirer.prompt(updateEmployeeQ).then((data) => {
        db.updateEmployees(data.role_id, data.employee_id);
        init();
      });
    });
  });
}

// Exit function
function exitApp() {
  connection.end();
}

// app start
init();
