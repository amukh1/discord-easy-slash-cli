let client = require('discord-easy-slash'); 
let fs = require('fs');

client.PUBLIC_KEY = '<PUBLIC_KEY>';
client.TOKEN = '<TOKEN>';
client.APP_ID = '<APPLICATION_ID>';
client.GUILD_ID = 'GUILD_ID'; // (you still need this, as you need to have a testing server)

client.command('test', 1, 'test', [ { "name": "number", "description": "number", "type": 4, "required": true, }, ]);
client.command('help', 1, 'help command', null);




function handler(command, data, res, type){
  console.log(`Command recived: ${command}`);
  fs.exists('./commands/' + command + '.js', function (exists) {
    if(exists)
    {
      let runFile = require('./commands/' + command + '.js');
      runFile(command, data, res, type);
    }else
    {
       client.reply(res, '404, Function not found..', null);
    };
});
   
};

client.on('slash-event', handler);


client.listen(80);
