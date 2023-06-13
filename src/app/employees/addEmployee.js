const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");
const EmployeeController = require('./employeeController');
const employeeController = new EmployeeController();

const addEmployee = async (event) => {
    return employeeController.addEmployee(event);
}

module.exports = {
    addEmployee: middy(addEmployee).use(httpJSONBodyParser()),
};