const Team = require("../models/team");

exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    return res.status(200).json(teams);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    return res.status(200).json(team);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.createTeam = async (req, res) => {
  const data = req.body;
  const team = new Team(data);
  try {
    const newTeam = await team.save();
    return res.status(201).json(newTeam);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const team = new Team(data);
    team._id = id
    await Team.findByIdAndUpdate(id, team);
    return res.status(200).json({message: "Team updated"});
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.deleteTeam = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Team deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
