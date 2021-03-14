require('dotenv').config();
const commands = require('./commands/index');
const bot = require('./bot');

bot.on('message', async (msg) => {
  const commandToExec = commands.find((command) => command.name === msg.content);
  if (commandToExec) await commandToExec.execute(msg, commandToExec.allowedRoles);
});
