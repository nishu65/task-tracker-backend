const express = require('express');
const router = express.Router();
const { createProject, getProjects, deleteProject } = require('../controllers/projectcontroller.js');
const auth = require('../middleware/authmiddleware.js');



router.post('/', auth, createProject);
router.get('/', auth, getProjects);
router.delete('/:id', auth, deleteProject);

module.exports = router;
