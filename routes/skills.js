  // routes/skills.js
  const express = require('express');
  const router = express.Router();

  // Require the controller that exports To-Do CRUD functions
  var skillsCtrl = require('../controllers/skills');

  // All actual paths begin with "/skills"

  // GET /skills
  router.get('/', skillsCtrl.index);
  // GET /skills/new
  router.get('/new', skillsCtrl.new);
  // GET /skills
  router.get('/:id', skillsCtrl.show);
  // POST /skills
  router.post('/', skillsCtrl.create);  // add this route
  // new route below
  router.delete('/:id', skillsCtrl.delete);

module.exports = router;
  