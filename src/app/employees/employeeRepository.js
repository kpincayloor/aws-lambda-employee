const dynamoDB = require('../../config/dynamoDBConfig');
const Employee = require('../../data/employees/employeeModel');

class EmployeeRepository {
  
  async getEmployees() {
    const result = await dynamoDB.scan({ TableName: "employees" }).promise();

    return result.Items;
  }

  async addEmployee(employee) {
    const params = {
      TableName: 'employees',
      Item: employee,
    };

    await dynamoDB.put(params).promise();
  }

  async getEmployeeById(id) {
    const params = {
      TableName: 'employees',
      Key: { id },
    };

    const result = await dynamoDB.get(params).promise();

    return result.Item;
  }

  async updateEmployee(employee) {
    const params = {
      TableName: 'employees',
      Item: employee,
    };

    await dynamoDB.put(params).promise();
  }

  async deleteEmployee(id) {
    const params = {
      TableName: 'employees',
      Key: { id },
    };

    await dynamoDB.delete(params).promise();
  }
}

module.exports = EmployeeRepository;