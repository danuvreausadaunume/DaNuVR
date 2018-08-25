const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNu:465573731557834762> | Nu ai permisiunea necesara.");

const Embed = new Discord.RichEmbed()

let mesaj = args.join(" ");
if(!mesaj) return message.channel.send("<:tickNu:465573731557834762> | Specifica un mesaj.")
Embed.setDescription(mesaj);
Embed.setColor(message.guild.members.get(bot.user.id).displayHexColor)
message.channel.send(Embed);

}

module.exports.help = {
	name: "say"
}
