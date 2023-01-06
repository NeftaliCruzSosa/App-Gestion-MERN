const mongoose = require("mongoose");

const WorkHour = mongoose.model("WorkHour", {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
    required: true,
  },
  commit: {
    type: String,
    required: true,
  },
});

module.exports = WorkHour;
