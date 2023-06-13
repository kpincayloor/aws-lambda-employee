const request = require('supertest');
const app = require('../../src/index');

const EmployeeController = require('../../src/app/employees/employeeController');
const EmployeeService = require('../../src/app/employees/employeeService');
const EmployeeRepository = require('../../src/app/employees/employeeRepository');

const employeeRepository = new EmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);
const employeeController = new EmployeeController(employeeService);

describe('Employee API', () => {
  // Prueba para obtener todos los empleados
  it('should return all employees', async () => {
    // Realiza una solicitud GET a la ruta correspondiente en tu aplicación
    const response = await request(app).get('/employees');
    
    // Verifica que la respuesta tenga el código de estado esperado (por ejemplo, 200)
    expect(response.statusCode).toBe(200);
    
    // Verifica que la respuesta contenga los datos esperados (por ejemplo, un array de empleados)
    expect(response.body).toEqual(/* datos esperados */);
  });

  // Prueba para crear un nuevo empleado
  it('should create a new employee', async () => {
    const newEmployee = {
      nombre: 'John Doe',
      edad: 30,
      cargo: "Developer"
    };

    // Realiza una solicitud POST a la ruta correspondiente en tu aplicación
    const response = await request(app)
      .post('/employees')
      .send(newEmployee);

    // Verifica que la respuesta tenga el código de estado esperado (por ejemplo, 201)
    expect(response.statusCode).toBe(201);

    // Verifica que la respuesta contenga los datos esperados (por ejemplo, el nuevo empleado creado)
    expect(response.body).toEqual(/* datos esperados */);
  });

  // Prueba para actualizar un empleado existente
  it('should update an existing employee', async () => {
    const updatedEmployee = {
      id: 1,
      nombre: 'John Doe 2',
      edad: 30,
      cargo: "Developer 2"
      // ... otros campos actualizados
    };

    // Realiza una solicitud PUT a la ruta correspondiente en tu aplicación
    const response = await request(app)
      .put('/employees/1')
      .send(updatedEmployee);

    // Verifica que la respuesta tenga el código de estado esperado (por ejemplo, 200)
    expect(response.statusCode).toBe(200);

    // Verifica que la respuesta contenga los datos esperados (por ejemplo, el empleado actualizado)
    expect(response.body).toEqual(/* datos esperados */);
  });

  // Prueba para eliminar un empleado existente
  it('should delete an existing employee', async () => {
    const employeeId = 1;

    // Realiza una solicitud DELETE a la ruta correspondiente en tu aplicación
    const response = await request(app).delete(`/employees/${employeeId}`);

    // Verifica que la respuesta tenga el código de estado esperado (por ejemplo, 204)
    expect(response.statusCode).toBe(204);

    // Verifica que el empleado haya sido eliminado (por ejemplo, verificando en la base de datos)
    const deletedEmployee = await employeeRepository.findById(employeeId);
    expect(deletedEmployee).toBeNull();
  });
});
