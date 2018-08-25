const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNu:465573731557834762> | Ai nevoie de permisiunea `MANAGE_MESSAGES` ca sa folosesti aceasta comanda.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("<:tickNu:465573731557834762> | Mentioneaza pe cineva.");
  if(tomute.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNu:465573731557834762> | Membrul mentionat are permisiunea \`ADMINISTRATOR\`, deci nu ii pot da mute.");
  let muterole = message.guild.roles.find(`name`, "Muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("<:tickNu:465573731557834762> | Specifica un timp.");

  await(tomute.addRole(muterole.id));
  message.channel.send(`➥ Utilizatorul ${tomute.user.tag} a fost adus la tacere.`)

  setTimeout(function(){
    tomute.removeRole(muterole.id);
  }, ms(mutetime));


}

module.exports.help = {
  name: "mute"
}
