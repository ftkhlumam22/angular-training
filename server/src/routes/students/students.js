const express = require("express");
const router = express.Router();

const studentConstroller = require("../../controllers/student");

router.get("/", studentConstroller.getAllStudent);
router.post("/", studentConstroller.addStudent);
router.delete("/:id", studentConstroller.delStudent);

module.exports = router;
