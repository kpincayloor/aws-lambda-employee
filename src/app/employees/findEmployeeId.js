const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");
const EmployeeController = require('./employeeController');
const employeeController = new EmployeeController();

const findEmployeeId = async (event) => {
    return employeeController.getEmployeeById(event);
}

module.exports = {
    findEmployeeId: middy(findEmployeeId).use(httpJSONBodyParser()),
};