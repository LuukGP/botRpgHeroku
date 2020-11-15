const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

const ytdl = require("ytdl-core");


// https://discord.com/api/oauth2/authorize?client_id=749415153371447338&permissions=8&scope=bot

/*
    Banco de Dados LOWDB
*/ 
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
/*
    Fim do BD.
*/ 

const cmd = require('./cmd.js');
client.login(process.env.TOKEN);

client.on('ready', () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    client.user.setActivity(`Pornô da sua mãe`, { type: 'WATCHING' });
});

client.on("guildCreate", () =>{
    db.set(guild.id, []).write();;
});

client.on('message', async message => {
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return; 
    
    // Limitador Sandbox (comentar ao finalizar).
    // if(message.guild.id != "749683842834628709") return;
    // if(message.author.id != "548570313202466858") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    

    /*
        Stage destinado para criação de comandos para NPCs.
    */ 

    if (comando === 'taverneiro'){
        message.delete();
        message.channel.send({files: ["./npcs/taverneiro.jpeg"]});
    }
    if (comando === 'mulher'){
        message.delete();
        message.channel.send({files: ["./npcs/mulher do taverneiro.jpeg"]});
    }
    if (comando === 'vovo'){
        message.delete();
        message.channel.send({files: ["./npcs/vovo.jpeg"]});
    }
    if (comando === 'diabo'){
        message.delete();
        message.channel.send({files: ["./npcs/diabo dos espinhos.jpeg"]});
    }
    if (comando === 'abu'){
        message.delete();
        message.channel.send({files: ["./npcs/arabe1.jpeg"]});
    }
    if (comando === 'jibran'){
        message.delete();
        message.channel.send({files: ["./npcs/arabe2.jpeg"]});
    }
    if (comando === 'samael'){
        message.delete();
        message.channel.send({files: ["./npcs/Samael Forma humana.jpeg"]});
    }
    if (comando === 'samaelaeter'){
        message.delete();
        message.channel.send({files: ["./npcs/Samael Forma Aeteria.jpeg"]});
    }
    if (comando === 'ralgad'){
        message.delete();
        message.channel.send({files: ["./npcs/Ralgad.jpeg"]});
    }
    if (comando === 'eldragoth'){
        message.delete();
        message.channel.send({files: ["./npcs/Eldragoth.jpeg"]});
    }
    if (comando === 'saharna'){
        message.delete();
        message.channel.send({files: ["./npcs/Saharna.jpeg"]});
    }
    if (comando === 'rargaman'){
        message.delete();
        message.channel.send({files: ["./npcs/Rar’gaman.jpeg"]});
    }
    if (comando === 'alvarez'){
        message.delete();
        message.channel.send({files: ["./npcs/Alvarez.jpeg"]});
    }
    if (comando === 'kredos'){
        message.delete();
        message.channel.send({files: ["./npcs/Kredos.jpeg"]});
    } 
    if (comando === 'khavsarsan'){
        message.delete();
        message.channel.send({files: ["./npcs/Khavsarsan.jpeg"]});
    }
    if (comando === 'talazar'){
        message.delete();
        message.channel.send({files: ["./npcs/Talazar.jpeg"]});
    }
    if (comando === 'xandrazar'){
        message.delete();
        message.channel.send({files: ["./npcs/Xandrazar.jpeg"]});
    }
    if (comando === 'guarda1'){
        message.delete();
        message.channel.send({files: ["./npcs/Guarda 1.jpeg"]});
    }
    if (comando === 'diabrete'){
        message.delete();
        message.channel.send({files: ["./npcs/Diabrete.jpeg"]});
    }
    if (comando === 'orcpirata'){
        message.delete();
        message.channel.send({files: ["./npcs/Orc Pirata.jpeg"]});
    }
    if (comando === 'asmodeus'){
        message.delete();
        message.channel.send({files: ["./npcs/Asmodeus.jpeg"]});
    }
    if (comando === 'drow'){
        message.delete();
        message.channel.send({files: ["./npcs/drow.jpeg"]});
    }
    if (comando === 'drowcapita'){
        message.delete();
        message.channel.send({files: ["./npcs/drowcapita.jpeg"]});
    }
    if (comando === 'drowcapitaodacasa'){
        message.delete();
        message.channel.send({files: ["./npcs/drowcapitaodacasa.jpeg"]});
    }
    if (comando === 'drowinquisitora'){
        message.delete();
        message.channel.send({files: ["./npcs/drowinquisitora.jpeg"]});
    }
    if (comando === 'homemkidu'){
        message.delete();
        message.channel.send({files: ["./npcs/homemkidu.jpeg"]});
    }
    if (comando === 'mulherkidu'){
        message.delete();
        message.channel.send({files: ["./npcs/mulherkidu.jpeg"]});
    }
    if (comando === 'shamankidu'){
        message.delete();
        message.channel.send({files: ["./npcs/shamankidu.jpeg"]});
    }
    if (comando === 'buziba'){
        message.delete();
        message.channel.send({files: ["./npcs/buziba.jpeg"]});
    }
    if (comando === 'shamantukan'){
        message.delete();
        message.channel.send({files: ["./npcs/shamantukan.jpeg"]});
    }
    if (comando === 'homemtukan'){
        message.delete();
        message.channel.send({files: ["./npcs/homemtukan.jpeg"]});
    }
    if (comando === 'mulhertukan'){
        message.delete();
        message.channel.send({files: ["./npcs/mulhertukan.jpeg"]});
    }
    if (comando === 'monifa'){
        message.delete();
        message.channel.send({files: ["./npcs/monifa.jpeg"]});
    }
    if (comando === 'tribokidu'){
        message.delete();
        message.channel.send({files: ["./npcs/tribokidu.jpeg"]});
    }
    if (comando === 'tribotukan'){
        message.delete();
        message.channel.send({files: ["./npcs/tribotukan.jpeg"]});
    }
    if (comando === 'florestadekotar'){
        message.delete();
        message.channel.send({files: ["./npcs/florestadekotar.jpeg"]});
    }
    if (comando === 'pteranodonte'){
        message.delete();
        message.channel.send({files: ["./npcs/pteranodonte.jpeg"]});
    }
    if (comando === 'tiranossauro'){
        message.delete();
        message.channel.send({files: ["./npcs/tiranossauro.jpeg"]});
    }
    if (comando === 'alossauro'){
        message.delete();
        message.channel.send({files: ["./npcs/alossauro.jpeg"]});
    }
    if (comando === 'triceratops'){
        message.delete();
        message.channel.send({files: ["./npcs/triceratops.jpeg"]});
    }
    if (comando === 'anquilossauro'){
        message.delete();
        message.channel.send({files: ["./npcs/anquilossauro.jpeg"]});
    }
    if (comando === 'brontossauro'){
        message.delete();
        message.channel.send({files: ["./npcs/brontossauro.jpeg"]});
    }
    if (comando === 'deinonico'){
        message.delete();
        message.channel.send({files: ["./npcs/deinonico.jpeg"]});
    }
    if (comando === 'velociraptor'){
        message.delete();
        message.channel.send({files: ["./npcs/velociraptor.jpeg"]});
    }
    if (comando === 'estegossauro'){
        message.delete();
        message.channel.send({files: ["./npcs/estegossauro.jpeg"]});
    }
    if (comando === 'nigersaurus'){
        message.delete();
        message.channel.send({files: ["./npcs/nigersaurus.jpeg"]});
    }
    if (comando === 'hadrassauro'){
        message.delete();
        message.channel.send({files: ["./npcs/hadrassauro.jpeg"]});
    }
    if (comando === 'quetzalcoatlus'){
        message.delete();
        message.channel.send({files: ["./npcs/quetzalcoatlus.jpeg"]});
    }
    if (comando === 'tigredentedesabre'){
        message.delete();
        message.channel.send({files: ["./npcs/tigredentedesabre.jpeg"]});
    }
    if (comando === 'mamute'){
        message.delete();
        message.channel.send({files: ["./npcs/mamute.jpeg"]});
    }
    if (comando === 'girallon'){
        message.delete();
        message.channel.send({files: ["./npcs/girallon.jpeg"]});
    }
    if (comando === 'gorila'){
        message.delete();
        message.channel.send({files: ["./npcs/gorila.jpg"]});
    }
    if (comando === 'catoblepas'){
        message.delete();
        message.channel.send({files: ["./npcs/catoblepas.jpeg"]});
    }
    if (comando === 'bicodemachado'){
        message.delete();
        message.channel.send({files: ["./npcs/bicodemachado.jpeg"]});
    }
    if (comando === 'babuino'){
        message.delete();
        message.channel.send({files: ["./npcs/babuino.jpeg"]});
    }
    if (comando === 'crocodilo'){
        message.delete();
        message.channel.send({files: ["./npcs/crocodilo.jpeg"]});
    }
    if (comando === 'lobo'){
        message.delete();
        message.channel.send({files: ["./npcs/lobo.jpeg"]});
    }
    if (comando === 'arbustoerrante'){
        message.delete();
        message.channel.send({files: ["./npcs/arbustoerrante.jpeg"]});
    }
    if (comando === 'driade'){
        message.delete();
        message.channel.send({files: ["./npcs/driade.jpeg"]});
    }
    if (comando === 'ente'){
        message.delete();
        message.channel.send({files: ["./npcs/ente.jpeg"]});
    }
    if (comando === 'infectados'){
        message.delete();
        message.channel.send({files: ["./npcs/infectados.jpeg"]});
    }
    if (comando === 'mosquito'){
        message.delete();
        message.channel.send({files: ["./npcs/mosquito.jpeg"]});
    }
    if (comando === 'draegloth'){
        message.delete();
        message.channel.send({files: ["./npcs/draegloth.jpeg"]});
    }
    if (comando === 'cidadedosanoesdosul'){
        message.delete();
        message.channel.send({files: ["./npcs/cidadedosanoesdosul.jpeg"]});
    }
    if (comando === 'cidadedosanoesdonorte'){
        message.delete();
        message.channel.send({files: ["./npcs/cidadedosanoesdonorte.jpeg"]});
    }
    if (comando === 'anoesdamontanha'){
        message.delete();
        message.channel.send({files: ["./npcs/anoesdamontanha.jpeg"]});
    }
    if (comando === 'anoesdamontanha2'){
        message.delete();
        message.channel.send({files: ["./npcs/anoesdamontanha2.jpeg"]});
    }
    if (comando === 'guardasdamontanha'){
        message.delete();
        message.channel.send({files: ["./npcs/guardasdamontanha.jpeg"]});
    }
    if (comando === 'estatua1'){
        message.delete();
        message.channel.send({files: ["./npcs/estatua1.jpeg"]});
    }
    if (comando === 'estatua2'){
        message.delete();
        message.channel.send({files: ["./npcs/estatua2.jpeg"]});
    }
    if (comando === 'estatua3'){
        message.delete();
        message.channel.send({files: ["./npcs/estatua3.jpeg"]});
    }
    if (comando === 'cultistadekredos'){
        message.delete();
        message.channel.send({files: ["./npcs/cultistadekredos.jpeg"]});
    }
    if (comando === 'seleste'){
        message.delete();
        message.channel.send({files: ["./npcs/seleste.jpeg"]});
    }
    
    if (comando === 'samuraiveterano'){
        message.delete();
        message.channel.send({files: ["./npcs/samuraiveterano.jpeg"]});
    }
    if (comando === 'samuraicavaleiro'){
        message.delete();
        message.channel.send({files: ["./npcs/samuraicavaleiro.jpeg"]});
    }
    if (comando === 'samuraiarqueiro'){
        message.delete();
        message.channel.send({files: ["./npcs/samuraiarqueiro.jpeg"]});
    }
    if (comando === 'irmandadeindigo'){
        message.delete();
        message.channel.send({files: ["./npcs/irmandadeindigo.jpeg"]});
    }
    if (comando === 'raimoke'){
        message.delete();
        message.channel.send({files: ["./npcs/raimoke.jpeg"]});
    }
    if (comando === 'draconatosamurai1'){
        message.delete();
        message.channel.send({files: ["./npcs/draconatosamurai1.jpeg"]});
    }
    if (comando === 'draconatosamurai2'){
        message.delete();
        message.channel.send({files: ["./npcs/draconatosamurai2.jpeg"]});
    }
    if (comando === 'golemdecarne'){
        message.delete();
        message.channel.send({files: ["./npcs/golemdecarne.jpeg"]});
    }
    if (comando === 'bloodmancer'){
        message.delete();
        message.channel.send({files: ["./npcs/bloodmancer.jpeg"]});
    }
    if (comando === 'sirsebastianodola'){
        message.delete();
        message.channel.send({files: ["./npcs/sirsebastianodola.jpeg"]});
    }
    if (comando === 'shogunfukumoto'){
        message.delete();
        message.channel.send({files: ["./npcs/shogunfukumoto.jpeg"]});
    }
    if (comando === 'imperadorogata'){
        message.delete();
        message.channel.send({files: ["./npcs/imperadorogata.jpeg"]});
    }
    if (comando === 'shoguninazuma'){
        message.delete();
        message.channel.send({files: ["./npcs/shoguninazuma.jpeg"]});
    }
    if (comando === 'shogunkomatsu'){
        message.delete();
        message.channel.send({files: ["./npcs/shogunkomatsu.jpeg"]});
    }
    if (comando === 'shogunikeda'){
        message.delete();
        message.channel.send({files: ["./npcs/shogunikeda.jpeg"]});
    }
    if (comando === 'shogunmotome'){
        message.delete();
        message.channel.send({files: ["./npcs/shogunmotome.jpeg"]});
    }
    if (comando === 'shogunsunada'){
        message.delete();
        message.channel.send({files: ["./npcs/shogunsunada.jpeg"]});
    }
    if (comando === 'simbolosdosshoguns'){
        message.delete();
        message.channel.send({files: ["./npcs/simbolosdosshoguns.jpeg"]});
    }
    if (comando === 'gadreel'){
        message.delete();
        message.channel.send({files: ["./npcs/gadreel.jpeg"]});
    }
    if (comando === 'basilisco'){
        message.delete();
        message.channel.send({files: ["./npcs/basilisco.jpeg"]});
    }
    if (comando === 'bulette'){
        message.delete();
        message.channel.send({files: ["./npcs/bulette.jpeg"]});
    }
    if (comando === 'ciclope'){
        message.delete();
        message.channel.send({files: ["./npcs/ciclope.jpeg"]});
    }
    if (comando === 'limocinzento'){
        message.delete();
        message.channel.send({files: ["./npcs/limocinzento.jpeg"]});
    }
    if (comando === 'peryton'){
        message.delete();
        message.channel.send({files: ["./npcs/peryton.jpeg"]});
    }
    if (comando === 'bullywug'){
        message.delete();
        message.channel.send({files: ["./npcs/bullywug.jpeg"]});
    }
    if (comando === 'kraken'){
        message.delete();
        message.channel.send({files: ["./npcs/kraken.jpeg"]});
    }
    

    /*
        Fim do Stage de NPCs.
    */

    /*
        Stage Marquinhos.  
    */
    
    if (comando === '16aninho'){
        let valor = db.get(message.guild.id + '[0].16').value();
        let novo = Number(valor + 1);

        let msg = `Marquinhos já passou o carpeado em ${novo} moças de 16 aninhos.`;
        send(msg);
        message.channel.send({files: ["./npcs/16.jpg"]});

        db.get(message.guild.id).find({16: valor}).assign({16: novo}).write();
    }
    
    /*
        Stage Marquinhos.  
    */ 

    if (comando === 'testeteste'){
        getUser();
    }
    
    if (comando === 'testetesteteste'){
        getUser();
        var d100 = rollDice(100);   
        let m = `${user} rodou um dado de 100 lados e tirou: ${d100}`;
        send(m);
    }

    if(comando === 'placheholder')
    {
        getUser();
        
        var d20 = rollDice(20);
        
        let m = ``;

        // Brute Force: 
        // d20 = 20;

        switch(d20){
            case 1:
                m = `${user} rodou um D20 e tirou: **${d20}**`;    
                message.channel.send(m, {files: ["./d20/1.png"]});
            break;
            case 2:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/teste.png"]});
            break;
            case 2:
                m = `${user} rodou um D20 e tirou: **${d20}**`; 
                message.channel.send(m, {files: ["./d20/teste.png"]});
            break;
            case 4:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/teste.png"]});
            break;
            case 5:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/5.png"]});
            break;
            case 6:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/6.png"]});
            break;
            case 7:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/7.png"]});
            break;
            case 8:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/8.png"]});
            break;
            case 9:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/9.png"]});
            break;
            case 10:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/10.png"]});
            break;
            case 11:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/11.png"]});
            break;
            case 12:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/12.png"]});
            break;
            case 13:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/13.png"]});
            break;
            case 14:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/14.png"]});
            break;
            case 15:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/15.png"]});
            break;
            case 16:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/16.png"]});
            break;
            case 17:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/teste.png"]});
            break;
            case 18:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/teste.png"]});
            break;
            case 19:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/teste.png"]});
            break;
            case 20:
                m = `${user} rodou um D20 e tirou: **${d20}**`;
                message.channel.send(m, {files: ["./d20/20.png"]});
            break;
        
        }
    }

    if(comando === 'avatar'){
        message.reply(message.author.displayAvatarURL);
    }

    if (comando === 'foto'){
        message.channel.send("Teste", {files: ["./d20/teste.png"]});
    }

    if(comando === 'role')
    {
        //var num = Math.floor(Math.random() * 65536);
        let valor = db.get(message.guild.id + '[0].role').value();
        let novo = Number(valor + 1);
        
        let msg = `Bruno já furou ${novo} roles.`;
        send(msg);

        db.get(message.guild.id).find({role: valor}).assign({role: novo}).write();

    }

    if (comando === 'cabelo')
    {
        //var num = Math.floor(Math.random() * 65536);
        let valor = db.get(message.guild.id + '[0].cabelo').value();
        let novo = Number(valor + 1);

        let msg = `Bruno já cortou o cabelo ${novo} vezes.`;
        send(msg);

        db.get(message.guild.id).find({cabelo: valor}).assign({cabelo: novo}).write();
    }

    if (comando === 'loterica')
    {
        //var rand = Math.floor(Math.random() * 101) + 2;
        let valor = db.get(message.guild.id + '[0].loterica').value();
        let novo = Number(valor + 1);

        let msg = `Bruno já foi na lotérica ${novo} vezes só hoje `; 
        send(msg);

        db.get(message.guild.id).find({loterica: valor}).assign({loterica: novo}).write();
    }

    if (comando === 'status')
    {
        //var rand = Math.floor(Math.random() * 65536); 
        let valor = db.get(message.guild.id + '[0].status').value();
        let novo = Number(valor + 1);

        let msg = `Hoje tivemos ${novo} status do Rafa.`; 
        send(msg);
        db.get(message.guild.id).find({status: valor}).assign({status: novo}).write();
    }

    if (comando === 'gizinha')
    {
        let msg = `Gizinha apareceu num total de 0 roles.`; 
        send(msg);    
    }

    if(comando === 'hpset'){
        var id = message.author.id;
        var hp = Number(args[0]);
        
        let check = db.get('hp').find({iden: id}).value();

        if(!args[0]){
            let msg = `Você se esqueceu de colocar seu HP. digite novamente como ***.hpset valor***`; 
            send(msg);
            return;
        }
        if(!Number.isInteger(hp)){
            let msg = `O valor que você digitou não é valido, tente novamente!`; 
            send(msg);
            return;
        }

        if(check === undefined){
            db.get('hp').push({
                iden: id, 
                health: hp
            }).write();

            let msg = `Seu HP foi salvo como: ***${hp}***`; 
            send(msg);

        }
        else{
            db.get('hp').find({iden: id}).assign({health: hp}).write();

            let msg = `Seu HP foi modificado para: ***${hp}***`; 
            send(msg);
        }
        
    }

    if(comando === 'whopper'){
        //var rand = Math.floor(Math.random() * 65536); 
        let valor = db.get(message.guild.id + '[0].whopper').value();
        let novo = Number(valor + 1);

        let msg = `O Marquinhos ja pediu ${novo} Whopper.`; 
        send(msg);
        db.get(message.guild.id).find({whopper: valor}).assign({whopper: novo}).write();
    }

    if(comando === 'bongada'){
        //var rand = Math.floor(Math.random() * 65536); 
        let valor = db.get(message.guild.id + '[0].bongada').value();
        let novo = Number(valor + 2);

        let msg = `O Marquinhos ja deu ${novo} bongadas.`; 
        send(msg);
        db.get(message.guild.id).find({bongada: valor}).assign({bongada: novo}).write();
    }
       
    function send(m1)
    {
        message.channel.send(m1);
        //Check ping: mostra no log a latência da mensagem, ou ping.)
        console.log(`Mensagem enviada em: ${message.guild.name} para ${message.author.username}.`);
        console.log(`Latência do bot: ${client.ping}ms.`);
    }

    function rollDice(sides){
        return Math.floor(Math.random() * sides) + 1;
    }

    function getUser(){
        user = message.member;
        user = user.toString();    
    }
    
    
} 
//End of Client on Message event.

);