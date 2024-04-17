  const skills = [
    {id: 1234, skill: 'Organization', done: true},
    {id: 5678, skill: 'Time Management', done: false},
    {id: 2468, skill: 'Critical Thinking', done: false}
  ];
	
  module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding an object within an array
  return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}