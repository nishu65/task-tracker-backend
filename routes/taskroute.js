const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask
} = require('../controllers/taskcontroller.js');

const auth = require('../middleware/authmiddleware.js');



router.post('/', auth, createTask); // create task
router.get('/:projectId', auth, getTasksByProject); // get tasks for project
router.put('/:id', auth, updateTask); // update task by id
router.delete('/:id', auth, deleteTask); // delete task by id

module.exports = router;
