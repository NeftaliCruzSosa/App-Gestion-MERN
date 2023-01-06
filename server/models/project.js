const mongoose = require("mongoose");

const Project = mongoose.model("Project", {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  repository: {
    type: String,
  },
  notes: [
    {
      type: String,
    },
  ],
  technicalMemo: {
    type: String,
  },
});

module.exports = Project;
