const Student = require("../models/students");
const apiResponse = require("../helpers/apiResponds");

const addStudent = async (req, res) => {
  const { body } = req;

  try {
    const newStudent = await Student.create({
      ...body,
    });

    if (newStudent) {
      return apiResponse.createdResponse(res, newStudent);
    }
  } catch (error) {
    return apiResponse.serverErrorResponse(res, error.message);
  }
};

const getAllStudent = async (req, res) => {
  try {
    const getAll = await Student.find().lean();
    if (getAll) {
      return apiResponse.successResponse(res, getAll);
    }
  } catch (error) {
    return apiResponse.serverErrorResponse(res, error.message);
  }
};

const delStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteStudent = await Student.findOneAndDelete(id);

    if (deleteStudent) {
      return apiResponse.successResponse(res, deleteStudent);
    }
  } catch (error) {
    return apiResponse.serverErrorResponse(res, error.message);
  }
};

const studentController = {
  addStudent,
  getAllStudent,
  delStudent,
};

module.exports = studentController;
