const bot = require('../bot');

const createEmbed = (message, embedInfo) => ({
  color: '5',
  title: 'AttendanceBot',
  description: message,
  ...embedInfo,
});

const sendMessageTo = (channelId, messageText, embedInfo = {}) => {
  const channel = bot.channels.get(channelId);
  return channel.send({ embed: createEmbed(messageText, embedInfo) });
};

module.exports = {
  sendMessageTo,
};
