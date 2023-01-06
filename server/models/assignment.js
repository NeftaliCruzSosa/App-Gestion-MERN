const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const assignmentSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    workedHours: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WorkHour",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Assignment = mongoose.model("assignments", assignmentSchema);

module.exports = Assignment;
