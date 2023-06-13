const Employee = require('../../data/employees/employeeModel');
const EmployeeRepository = require('./employeeRepository');

class EmployeeService {
  constructor() {
    this.employeeRepository = new EmployeeRepository();
  }

  async getEmployees() {
    return this.employeeRepository.getEmployees();
  }

  async addEmployee(nombre, edad, cargo) {
    const employee = new Employee(null, nombre, edad, cargo);
    await this.employeeRepository.addEmployee(employee);
    return employee;
  }

  async getEmployeeById(id) {
    return this.employeeRepository.getEmployeeById(id);
  }

  async updateEmployee(id, nombre, edad, cargo) {
    const employee = new Employee(id, nombre, edad, cargo);
    await this.employeeRepository.updateEmployee(employee);
    return employee;
  }

  async deleteEmployee(id) {
    return this.employeeRepository.deleteEmployee(id);
  }
}

module.exports = EmployeeService;