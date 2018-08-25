const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNu:465573731557834762> | Ai nevoie de permisiunea `MANAGE_MESSAGES` ca sa accesezi aceasta comanda.");
  if(!args[0]) return message.channel.send("**Foloseste**: -purge <2-100>");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} mesaje au fost sterse.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "purge"
}
