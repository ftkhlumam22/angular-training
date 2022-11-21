const route = require("express").Router();

const Student = require("./students/students");

route.use("/students", Student);

module.exports = route;
