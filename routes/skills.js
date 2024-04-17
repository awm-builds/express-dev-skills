  // routes/skills.js
  const express = require('express');
  const router = express.Router();

  // Require the controller that exports Skills CRUD functions
  var skillsCtrl = require('../controllers/skills');

  // All actual paths begin with "/skills"

  // GET /skills
  router.get('/', skillsCtrl.index);
  // GET /skills
  router.get('/:id', skillsCtrl.show);
  
module.exports = router;
