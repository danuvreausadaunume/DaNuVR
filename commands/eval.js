const Discord = require("discord.js");
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "406819407097233430") return message.channel.send(`\`${message.author.tag}\`, you don't have the needed permission to use this.`);
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}
module.exports.help = {
    name: "eval"
}
