const { v4: uuidv4 } = require('uuid');

class Employee {
  constructor(id, nombre, edad, cargo) {
    this.id = id || uuidv4();
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
  }
}

module.exports = Employee;