const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  findRoles() {
    return this.connection.promise().query("SELECT * FROM roles");
  }

  findEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }

  addDepartments(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  addRoles(roles) {
    return this.connection.promise().query("INSERT INTO roles SET ?", roles);
  }

  addEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  updateEmployees(role, employee) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [role, employee]);
  }
}

module.exports = new DB(connection);
