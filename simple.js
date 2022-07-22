let client = require('discord-easy-slash'); 

client.PUBLIC_KEY = '<PUBLIC_KEY>'
client.TOKEN = '<TOKEN>'
client.APP_ID = '<APPLICATION_ID>'
client.GUILD_ID = 'GUILD_ID' // (you still need this, as you need to have a testing server)

client.command('t', 1, 'testingg', [ { "name": "numberrr", "description": "numberrrr", "type": 4, "required": true, }, ])
client.command('help', 1, 'help command', null)




function handler(command, data, res, type){
  console.log(`Command recived: ${command}`)
if(command == 'help'){
    client.reply(res, 'Help command?', null)
  }else {
    let e = [
   {
                "title": "404 Could not find command.",
                "description": "Client could not locate command file.",
                "url": "https://amukh1.dev",
                "color": 9376274,
                "fields": [
                  {
                    "name": "Trouble shooting:",
                    "value": "Try running the command again in 30 minutes"
                  },
                  {
                    "name": "Contact the developer:",
                    "value": "https://amukh1.dev/ && amukh1#9613"
                  }
                ],
                "author": {
                  "name": "Client",
                  "url": "https://amukh1.dev"
                },
                "footer": {
                  "text": "Client"
                },
                "timestamp": new Date()
              },
  ]
     client.reply(res, 'Cound not find command..', e)
  }
}

client.on('slash-event', handler);


client.listen(80)
