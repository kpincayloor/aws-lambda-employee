const express = require('express');
const bodyParser = require('body-parser');
const EmployeeController = require('../src/app/employees/employeeController');
const EmployeeService = require('../src/app/employees/employeeService');
const EmployeeRepository = require('../src/app/employees/employeeRepository');

const employeeRepository = new EmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);
const employeeController = new EmployeeController(employeeService);

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/employees', employeeController.getEmployees.bind(employeeController));
app.post('/employees', employeeController.addEmployee.bind(employeeController));
app.put('/employees/:id', employeeController.updateEmployee.bind(employeeController));
app.get('/employees/:id', employeeController.getEmployeeById.bind(employeeController));
app.delete('/employees/:id', employeeController.deleteEmployee.bind(employeeController));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});