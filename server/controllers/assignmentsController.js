const Assignment = require("../models/assignment");

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    return res.status(200).json(assignments);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    return res.status(200).json(assignment);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.createAssignment = async (req, res) => {
  const data = req.body;
  try {
    const assignment = new Assignment(data);
    const newAssignment = await assignment.save();
    return res.status(201).json(newAssignment);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const assignment = new Assignment(data);
    assignment._id = id
    await Assignment.findByIdAndUpdate(id, assignment);
    return res.status(200).json({message: "Assignment updated"});
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Assignment deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
