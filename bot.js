const Discord = require('discord.js');

const bot = new Discord.Client();
const { TOKEN } = process.env;

bot.login(TOKEN);

module.exports = bot;
