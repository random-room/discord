const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'with Talia'
        }
    });
});

client.on("message", msg => {
 if (msg.content === 'Taylor Scott') {
   msg.channel.send("Thats enough!");
 }
});

client.on("message", msg => {
 if (msg.content === 'Hey Jordan') {
   msg.channel.send("ARE YOU DEAF?");
 }
});

client.on("message", msg => {
 if (msg.content === 'Gavo') {
   msg.channel.send("What a fucking joke!");
 }
});

client.on("message", msg => {
 if (msg.content === 'Are you racist Blake?') {
   msg.channel.send("Yes!");
 }
});

client.on("message", msg => {
 if (msg.content === 'Are you gay Blake?') {
   msg.channel.send("No!, i hate the rainbows! - there to colourful for me!");
 }
});

client.on("message", msg => {
 if (msg.content === 'Godzilla') {
   msg.channel.send("I AM GODZILLA");
 }
});

client.on("message", msg => {
 if (msg.content === 'HSC') {
   msg.channel.send("I don't have to do that");
 }
});

client.on("message", msg => {
 if (msg.content === 'Discussion group') {
   msg.channel.send("I'm the dominate top fan around here!");
 }
});

client.on("message", msg => {
 if (msg.content === 'Movies') {
   msg.channel.send("Their stupid");
 }
});

client.on("message", msg => {
 if (msg.content === 'JMC') {
   msg.channel.send("I got in to Entertainment Business Studies");
 }
});

client.on("message", msg => {
 if (msg.content === 'You have a big head') {
   msg.channel.send("HEY THATS ENOUGH");
 }
});

client.on("message", msg => {
 if (msg.content === 'Headspace') {
   msg.channel.send("Would you like the number Talia?");
 }
});

client.login('NjI3MDkwOTI2Nzc0Mzg2NzEw.XZMVAA.KCtK3O2WDt9a9HDjg1yQ2JkyRBs');
