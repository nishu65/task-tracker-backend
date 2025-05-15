const Task = require('../models/task.js');
const Project = require('../models/project.js');

// Create Task
exports.createTask = async (req, res) => {
  const { projectId, title, description } = req.body;

  try {
    const project = await Project.findOne({ _id: projectId, user: req.user.id });
    if (!project) return res.status(404).json({ error: "Project not found or unauthorized" });

    const task = await Task.create({
      project: projectId,
      title,
      description,
      status: 'Pending',
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all tasks for a project
exports.getTasksByProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findOne({ _id: projectId, user: req.user.id });
    if (!project) return res.status(404).json({ error: "Project not found or unauthorized" });

    const tasks = await Task.find({ project: projectId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update task status or content
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const task = await Task.findById(id).populate('project');
    if (!task || task.project.user.toString() !== req.user.id)
      return res.status(404).json({ error: "Task not found or unauthorized" });

    if (title) task.title = title;
    if (description) task.description = description;
    if (status) {
      task.status = status;
      task.completedAt = status === "Completed" ? new Date() : null;
    }

    const updated = await task.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id).populate('project');
    if (!task || task.project.user.toString() !== req.user.id)
      return res.status(404).json({ error: "Task not found or unauthorized" });

    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
