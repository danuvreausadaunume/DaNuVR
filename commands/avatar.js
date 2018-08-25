const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

 let aUser = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
    .setAuthor(`${aUser.tag}`, aUser.avatarURL)
    .setImage(`${aUser.avatarURL}?size=1028`)
    .setFooter(`⚒ Cerut de catre: ${message.author.username}`)
    .setColor("#36393e")
    .setDescription(`[Link Download](${aUser.avatarURL})`)

    message.channel.send({embed})
}

module.exports.help = {
    name: "avatar"
}
