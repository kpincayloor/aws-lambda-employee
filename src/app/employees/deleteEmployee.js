const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");
const EmployeeController = require('./employeeController');
const employeeController = new EmployeeController();

const deleteEmployee = async (event) => {
    return employeeController.deleteEmployee(event);
}

module.exports = {
    deleteEmployee: middy(deleteEmployee).use(httpJSONBodyParser()),
};