const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workHourSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const WorkHour = mongoose.model("WorkHour", workHourSchema);

module.exports = WorkHour;
