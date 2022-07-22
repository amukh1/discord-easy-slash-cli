const client = require('discord-easy-slash')

function payload(command, data, msg, type){
 client.reply(msg, 'Help command!', null)
}

module.exports = payload
