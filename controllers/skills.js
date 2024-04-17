// controllers/skills.js

  // Convention is to name the model in uppercase and singular
  const skill = require('../models/skill');

  module.exports = {
      index,
      show
  };

  function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll()
    });
}
  
function show(req, res) {
  res.render('skills/show', {
    skills: skill.getOne(req.params.id),
  });
}