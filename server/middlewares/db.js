const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((error) => {
      console.log("Error connecting to the database:", error);
    });
};
