const mongoose = require("mongoose");

module.exports = () => {
  mongoose
  .set('strictQuery', false)
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((error) => {
      console.log("Error connecting to the database:", error);
    });
};
