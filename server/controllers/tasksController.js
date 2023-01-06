const Task = require("../models/task");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.createTask = async (req, res) => {
  const data = req.body;
  const task = new Task(data);
  try {
    const newTask = await task.save();
    return res.status(201).json(newTask);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const task = new Task(data);
    task._id = id
    await Task.findByIdAndUpdate(id, task);
    return res.status(200).json({message: "Task updated"});
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
