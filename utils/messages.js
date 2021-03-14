const createEmbed = (message, embedInfo) => ({
  color: '#0099ff',
  title: 'AttendanceBot',
  description: message,
  ...embedInfo,
});

const sendMessageTo = (channelId, messageText, embedInfo = {}) => {
  const channel = bot.channels.cache.get(channelId);
  return channel.send({ embed: createEmbed(messageText, embedInfo) });
};

module.exports = {
  sendMessageTo
}