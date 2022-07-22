let client = require('discord-easy-slash'); 

client.PUBLIC_KEY = '<PUBLIC_KEY>'
client.TOKEN = '<TOKEN>'
client.APP_ID = '<APPLICATION_ID>'
client.GUILD_ID = 'GUILD_ID' // (you still need this, as you need to have a testing server)

client.command('t', 1, 'testingg', [ { "name": "numberrr", "description": "numberrrr", "type": 4, "required": true, }, ])
client.command('help', 1, 'help command', null)




function handler(command, data, res, type){
  console.log(`Command recived: ${command}`)
    let runFile = require('./commands/' + command + '.js')
    runFile(command, data, res, type)
}

client.on('slash-event', handler);


client.listen(80)
