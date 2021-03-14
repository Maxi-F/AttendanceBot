const takeAttendance = require('./takeAttendance');

const commands = [{
  name: '!takeAttendance',
  execute: takeAttendance,
  allowedRoles: ['docente'],
}];

module.exports = commands;
