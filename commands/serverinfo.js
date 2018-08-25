const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
   let sicon = message.guild.iconURL || "https://d30y9cdsu7xlg0.cloudfront.net/png/57788-200.png";
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter("Server creat")
   .setTimestamp(message.guild.createdAt)
   .setColor("#36393e")
   .setThumbnail(sicon)
   .addField("» ID", message.guild.id, true)
   .addField("» Nume", message.guild.name, true)
   .addField("» Owner", message.guild.owner.user.tag, true)
   .addField("» Regiune", message.guild.region, true)
   .addField("» Canale", message.guild.channels.size, true)
   .addField("» Membrii", message.guild.memberCount, true)
   .addField("» Oameni", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("» Roboti", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("» Online", online.size, true)
   .addField("» Roluri", message.guild.roles.size, true);
   message.channel.send(serverembed);

}

module.exports.help = {
  name:"serverinfo"
}
