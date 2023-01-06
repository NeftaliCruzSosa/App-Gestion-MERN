const WorkHour = require("../models/workhour");

exports.getWorkHours = async (req, res) => {
  try {
    const workhours = await WorkHour.find();
    return res.status(200).json(workhours);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getWorkHour = async (req, res) => {
  try {
    const workhour = await WorkHour.findById(req.params.id);
    if (!workhour) {
      return res.status(404).json({ message: "WorkHour not found" });
    }
    return res.status(200).json(workhour);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.createWorkHour = async (req, res) => {
  const data = req.body;
  const workhour = new WorkHour(data);
  try {
    const newWorkHour = await workhour.save();
    return res.status(201).json(newWorkHour);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.updateWorkHour = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const workhour = new WorkHour(data);
    workhour._id = id
    await WorkHour.findByIdAndUpdate(id, workhour);
    return res.status(200).json({message: "WorkHour updated"});
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.deleteWorkHour = async (req, res) => {
  try {
    await WorkHour.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "WorkHour deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
