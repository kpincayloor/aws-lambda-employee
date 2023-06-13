const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");
const EmployeeController = require('./employeeController');
const employeeController = new EmployeeController();

const updateEmployee = async (event) => {
    return employeeController.updateEmployee(event);
}

module.exports = {
    updateEmployee: middy(updateEmployee).use(httpJSONBodyParser()),
};