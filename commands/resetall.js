const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.guild.members.forEach(user => {
user.setNickname("");
});

}

module.exports.help = {
  name: "resetall"
}
