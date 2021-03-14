const executeCheckingRoles = require('../utils/executeCheckingRoles');
const takeAttendance = require('./takeAttendance');

const commands = [{
  name: '!takeAttendance',
  execute: takeAttendance,
  middlewares: [executeCheckingRoles(['docente'])],
  isExecutionPossible: true,
}];

module.exports = commands;
