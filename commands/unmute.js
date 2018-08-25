const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNu:465573731557834762> | Ai nevoie de permsiunea `MANAGE_MESSAGES` ca sa accesezi aceasta comanda.");
  let unmuteUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!unmuteUser) return message.channel.send("<:tickNu:465573731557834762> | Mentioneaza pe cineva.");
  let unmuteRole = message.guild.roles.find("name", "Muted");

  if(!unmuteUser.roles.some(r=>["Muted"].includes(r.name)) ) return message.channel.send("<:tickNu:465573731557834762> | Utilizator nu are mute.");

  unmuteUser.removeRole(unmuteRole);
  message.channel.send(`➥ Utilizatorul ${unmuteUser.user.tag} a luat unmute cu succes.`)
}

module.exports.help = {
  name: "unmute"
}
