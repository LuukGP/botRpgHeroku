const Discord = require('discord.js');
const client = new Discord.Client();
const mes = Discord.Message;

module.exports = {
    teste: function() {
        console.log("teste");
    },
    avatar: function(){
        message.reply(message.author.displayAvatarURL);
    }
 }