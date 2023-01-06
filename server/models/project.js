const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
