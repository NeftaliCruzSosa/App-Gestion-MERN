const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const db = require("./middlewares/db");

const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
db();

// Enable CORS
app.use(cors());

// Configure express to process incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Load API routes
const assignments = require("./routes/assignments");
const teams = require("./routes/teams");
const users = require("./routes/users");
const projects = require("./routes/projects");
const tasks = require("./routes/tasks");
const workHours = require("./routes/workHours");

app.use("/assignments", assignments)
app.use("/teams", teams);
app.use("/users", users);
app.use("/projects", projects);
app.use("/tasks", tasks);
app.use("/work-hours", workHours);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
