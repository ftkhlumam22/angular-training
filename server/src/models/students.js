const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Student", studentSchema);
