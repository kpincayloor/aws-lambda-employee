const EmployeeService = require('./employeeService');

class EmployeeController {
  constructor() {
    this.employeeService = new EmployeeService();
  }

  async getEmployees() {
    try {
      const employees = await this.employeeService.getEmployees();

      if (!employees) {        
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'No existen empleados' }),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(employees),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error al obtener todos los empleados' }),
      };
    }
  }

  async addEmployee(event) {
    const { nombre, edad, cargo } = event.body;

    try {
      const employee = await this.employeeService.addEmployee(nombre, edad, cargo);
      return {
        statusCode: 201,
        body: JSON.stringify(employee),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error al crear el empleado' }),
      };
    }
  }

  async getEmployeeById(event) {
    const { id } = event.pathParameters;

    try {
      const employee = await this.employeeService.getEmployeeById(id);

      if (!employee) {        
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Empleado no encontrado' }),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(employee),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error al obtener el empleado' }),
      };
    }
  }

  async updateEmployee(event) {
    const { id } = event.pathParameters;
    const { nombre, edad, cargo } = event.body;

    try {
      const employee = await this.employeeService.updateEmployee(id, nombre, edad, cargo);

      if (!employee) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Empleado no encontrado' }),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(employee),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error al actualizar el empleado' }),
      };
    }
  }

  async deleteEmployee(event) {
    const { id } = event.pathParameters;

    try {
      await this.employeeService.deleteEmployee(id);
      return {
        statusCode: 204,
        body: JSON.stringify({message: 'Empleado eliminado correctamente'}),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error al eliminar el empleado' }),
      };
    }
  }
}

module.exports = EmployeeController;