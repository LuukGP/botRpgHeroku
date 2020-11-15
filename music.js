const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

//20201150613194

var servers = {};

const ytdl = require("ytdl-core");

client.login(config.token);

const PREFIX = '.';


client.on('ready', () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    client.user.setActivity(`Pornô da sua mãe`, { type: 'WATCHING' });
});
 
client.on('message', async message => {
    
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return; 


    let args = message.content.substring(PREFIX.length).split("");

    switch(args[0]){
        case 'play':

            function play(connection, message){
                var server = servers[message.guild.id];

                server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

                server.queue.shift();

                server.dispatcher.on("end", function(){
                    if(server.queue[0]){
                        play(connection, message);
                    } else {
                        connection.disconnect();
                    }
                })
            }

            if(!args[1]){
                let msg = `Você precisa providenciar um link.`;
                send(msg);
                return;
            }
            
            if(!message.member.voiceChannel){
                let msg = `Você precisa estar em um canal para tocar uma música.`;
                send(msg);
                return; 
            }

            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                play(connection, message);
            })
        
        break;
            case 'ping': 
            send(`pong`);
            break;
    }


    function send(m1)
    {
        message.channel.send(m1);
        //Check ping: mostra no log a latência da mensagem, ou ping.)
        console.log(`Mensagem enviada em: ${message.guild.name} (CANAL) para ${message.author.username}.`);
        console.log(`Latência do bot: ${client.ping}ms.`);
    }
    
});

