const Project = require("../models/project");

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    return res.status(200).json(project);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.createProject = async (req, res) => {
  const data = req.body;
  try {
    const project = new Project(data);
    const newProject = await project.save();
    return res.status(201).json(newProject);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const project = new Project(data);
    project._id = id
    await Project.findByIdAndUpdate(id, project);
    return res.status(200).json({message: "Project updated"});
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
