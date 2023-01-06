const WorkHour = require("../models/workHour");

exports.getWorkHours = async (req, res) => {
  try {
    const workHours = await WorkHour.find();
    res.json(workHours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getWorkHour = async (req, res) => {
  try {
    const workHour = await WorkHour.findById(req.params.id);
    if (!workHour) {
      return res.status(404).json({ message: "Work hour not found" });
    }
    res.json(workHour);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createWorkHour = async (req, res) => {
  const workHour = new WorkHour({
    user: req.body.user,
    date: req.body.date,
    hours: req.body.hours,
    task: req.body.task,
    commit: req.body.commit,
  });
  try {
    const newWorkHour = await workHour.save();
    res.status(201).json(newWorkHour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateWorkHour = async (req, res) => {
  try {
    const workHour = await WorkHour.findById(req.params.id);
    if (!workHour) {
      return res.status(404).json({ message: "Work hour not found" });
    }
    workHour.user = req.body.user;
    workHour.date = req.body.date;
    workHour.hours = req.body.hours;
    workHour.task = req.body.task;
    workHour.commit = req.body.commit;
    const updatedWorkHour = await workHour.save();
    res.json(updatedWorkHour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteWorkHour = async (req, res) => {
  try {
    const workHour = await WorkHour.findById(req.params.id);
    if (!workHour) {
      return res.status(404).json({ message: "Work hour not found" });
    }
    await workHour.remove();
    res.json({ message: "Work hour deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
