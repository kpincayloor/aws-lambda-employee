const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");
const EmployeeController = require('./employeeController');
const employeeController = new EmployeeController();

const getEmployees = async (event) => {
    return employeeController.getEmployees();
}

module.exports = {
    getEmployees: middy(getEmployees).use(httpJSONBodyParser()),
};