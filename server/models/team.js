const mongoose = require("mongoose");

const Team = mongoose.model("Team", {
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
});

module.exports = Team;
