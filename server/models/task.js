const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  dueDate: {
    type: Date,
    required: true,
  },
  estimatedHours: {
    type: Number,
    required: true,
  },
  workedHours: {
    type: Number,
  },
});

module.exports = Task;
