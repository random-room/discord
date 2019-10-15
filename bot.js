const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login('NjI3MDkwOTI2Nzc0Mzg2NzEw.XaV-xQ.0Fv8SVPp7ktDDETP8a1CHLCFSyU');
