require('dotenv').config();
const commands = require('./commands/index');
const bot = require('./bot');

bot.on('message', async (msg) => {
  const commandToExec = commands.find((command) => command.name === msg.content);
  if (commandToExec) {
    commandToExec.middlewares.forEach(
      (middleware) => commandToExec.isExecutionPossible && middleware(msg, commandToExec),
    );
    return commandToExec.isExecutionPossible && commandToExec.execute(msg);
  }
});
