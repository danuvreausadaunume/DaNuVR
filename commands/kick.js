const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const canal = bot.channels.get("465629035448500235");
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("<:tickNu:465573731557834762> | Nu ai permisiunea necesara.");
  if(args[0] == "help"){
    message.channel.send("**Foloseste**: -kick <@membru> <motiv>");
    return;
  }
  if(!message.guild.members.get(bot.user.id).hasPermission("KICK_MEMBERS")) return message.channel.send("<:tickNu:465573731557834762> | Bot-ul nu are permisiunea necesara.")
  if(!args[0]) return message.channel.send("<:tickNu:465573731557834762> | Mentioneaza pe cineva.");
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("<:tickNu:465573731557834762> | Mentioneaza pe cineva.");
  let kReason = args.join(" ").slice(22) || "Nici-un motiv specificat.";
  if(!kUser.kickable) return message.channel.send("<:tickNu:465573731557834762> | Nu pot da afara acest membru.");
  if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNu:465573731557834762> | Membrul mentionat este un Administrator, nu il pot da afara.");
  if(!kReason) return message.channel.send("<:tickNu:465573731557834762> | Specifica un motiv.");


  kUser.send(`Hei, ${kUser.user.tag}. Ai fost banat pe **${message.guild.name}** de **${message.author.tag}** cu urmatorul motiv: **${kReason}**.`);
  message.guild.member(kUser).ban(kReason);
  let embed = new Discord.RichEmbed()
  .setAuthor("Case | Kick", message.guild.iconURL)
  .addField("Author", message.author.tag)
  .addField("Banned user", kUser.user.tag)
  .addField("Reason", kReason)
  .setDescription(`Date: ${day}/${month}/${year}`)
  .setFooter("Developed by " + bot.users.get("463024524263161877").tag, bot.users.get("463024524263161877").avatarURL)
  .setColor("#36393e")
  canal.send(embed);

  message.channel.send(`➥ Utilizatorul ${kUser.user.tag} a fost dat afara cu succes.`)
}

module.exports.help = {
  name:"kick"
}
