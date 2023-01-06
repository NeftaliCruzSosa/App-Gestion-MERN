const Assignment = require("../models/assignment");

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAssignment = async (req, res) => {
  const assignment = new Assignment({
    user: req.body.user,
    task: req.body.task,
    workedHours: req.body.workedHours,
  });
  try {
    const newAssignment = await assignment.save();
    res.status(201).json(newAssignment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    assignment.user = req.body.user;
    assignment.task = req.body.task;
    assignment.workedHours = req.body.workedHours;
    const updatedAssignment = await assignment.save();
    res.json(updatedAssignment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    await assignment.remove();
    res.json({ message: "Assignment deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
