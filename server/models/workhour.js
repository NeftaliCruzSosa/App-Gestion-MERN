const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workHourSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    commit: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const WorkHour = mongoose.model("workHours", workHourSchema);

module.exports = WorkHour;
