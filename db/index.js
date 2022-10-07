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

  addDepartments(department){
    return this.connection.promise().query("INSERT INTO department SET ?", department);
  }
}

module.exports = new DB(connection);
