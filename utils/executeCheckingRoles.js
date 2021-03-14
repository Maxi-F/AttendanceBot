const executeCheckingRoles = (allowedRoles) => async (message, command) => {
  if (!message.member.roles.some(
    (role) => allowedRoles.some((allowedRole) => allowedRole === role.name),
  )) {
    message.reply('no tenes permisos para realizar este comando');
    command.isExecutionPossible = false; // eslint-disable-line no-param-reassign
  }
};

module.exports = executeCheckingRoles;
