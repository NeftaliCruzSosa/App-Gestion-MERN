const mongoose = require("mongoose");

const Assignment = mongoose.model("Assignment", {
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
  workedHours: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkHour",
  }],
});

module.exports = Assignment;
