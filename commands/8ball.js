
const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

  // if no args

   if(!args[0]) {
     message.channel.send(`<:tickNu:465573731557834762> | Intreaba-ma ceva.`);
     return;
   };

  // responses

  let responses = [
  `Da`,
  `Nu`,
  `Probabil`,
  `Habar nu am`,
  `Undeva pe acolo`,
  `Nu chiar`,
  `Intreaba-ma din nou`,
  `Ce`
 ]

// perms checking

 if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
   message.channel.send(`:8ball: **| ${responses[Math.floor(Math.random() * responses.length)]}, ${message.author.username}**`);
   return;
 }

 // embed
    const embed = new Discord.RichEmbed()
    .setColor(message.guild.members.get(bot.user.id).displayHexColor)
    .setTitle(`:8ball: | ${responses[Math.floor(Math.random() * responses.length)]}, ${message.author.username}`)
    message.channel.send({embed: embed});
};

module.exports.help = {
  name: '8ball'
}
