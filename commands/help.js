const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("**ORBIT**: Dacă ai nevoie de ajutor contactează un owner.");

}

module.exports.help = {
  name: 'help'
}
