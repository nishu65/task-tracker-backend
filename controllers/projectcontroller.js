const Project = require('../models/project.js');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title } = req.body;

    // Check limit: max 4 projects per user
    const count = await Project.countDocuments({ user: req.user.id });
    if (count >= 4) {
      return res.status(400).json({ error: 'Max 4 projects allowed' });
    }

    const newProject = new Project({
      title,
      user: req.user.id
    });

    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all projects for a user
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!project) {
      return res.status(404).json({ error: 'Project not found or unauthorized' });
    }

    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
