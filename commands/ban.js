const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const canal = bot.channels.get("465629035448500235");
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<:tickNu:465573731557834762> | Nu ai permisiunea necesara.");
  if(args[0] == "help"){
    message.channel.send("**Foloseste**: -ban <@membru> <motiv>");
    return;
  }
  if(!message.guild.members.get(bot.user.id).hasPermission("BAN_MEMBERS")) return message.channel.send("<:tickNu:465573731557834762> | Bot-ul nu are permisiunea necesara.")
  if(!args[0]) return message.channel.send("<:tickNu:465573731557834762> | Mentioneaza pe cineva.");
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("<:tickNu:465573731557834762> | Mentioneaza pe cineva.");
  let bReason = args.join(" ").slice(22) || "Nici-un motiv specificat.";
  if(!bUser.bannable) return message.channel.send("<:tickNu:465573731557834762> | Nu pot bana acest membru.");
  if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNu:465573731557834762> | Membrul mentionat este un Administrator, nu il pot bana.");
  if(!bReason) return message.channel.send("<:tickNu:465573731557834762> | Specifica un motiv.");


  bUser.send(`Hei, ${bUser.user.tag}. Ai fost banat pe **${message.guild.name}** de **${message.author.tag}** cu urmatorul motiv: **${bReason}**.`);
  message.guild.member(bUser).ban(bReason);
  let embed = new Discord.RichEmbed()
  .setAuthor("Case | Ban", message.guild.iconURL)
  .setThumbnail(bot.user.avatarURL)
  .addField("Author", message.author.tag)
  .addField("Banned user", bUser.user.tag)
  .addField("Reason", bReason)
  .setDescription(`Date: ${day}/${month}/${year}`)
  .setFooter("Developed by " + bot.users.get("463024524263161877").tag, bot.users.get("463024524263161877").avatarURL)
  .setColor("#36393e")
  canal.send(embed);

message.channel.send(`➥ Utilizatorul ${bUser.user.tag} a fost banat cu succes.`)
}

module.exports.help = {
  name:"ban"
}
