const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setTitle("Information")
    .setColor(0xFF4500)
    .addField("cleck to invite the bot [https://discordapp.com/api/oauth2/authorize?client_id=622401042491113482&permissions=51200&scope=bot]")
  
  message.channel.send(embed);
};

exports.help = {
  name: "invite",
  category: "General",
  description: "invite in your server.",
  usage: "invite"
};
