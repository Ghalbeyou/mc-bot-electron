const mineflayer = require('mineflayer');
const Movements = require('mineflayer-pathfinder').Movements;
const pathfinder = require('mineflayer-pathfinder').pathfinder;
const { GoalBlock } = require('mineflayer-pathfinder').goals;

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
exports.create = function createBot(ip, port, version) {
   var logger = document.getElementById('log');
   const bot = mineflayer.createBot({
      username: makeid(),
      password: "",
      auth: "mojang",
      host: ip,
      port: port,
      version: version,
   });

   bot.loadPlugin(pathfinder);
   const mcData = require('minecraft-data')(bot.version);
   const defaultMove = new Movements(bot, mcData);
   bot.settings.colorsEnabled = false;

   bot.once('spawn', () => {

      logger.innerHTML = "[BotLog] Bot joined to the server\n";
         logger.innerHTML = '[INFO] Started auto-auth module';

         var password = "123456"
         setTimeout(() => {
            bot.chat(`/register ${password} ${password}`);
            bot.chat(`/login ${password}`);
         }, 500);

         logger.innerHTML = `[Auth] Authentification commands executed.`;
      

      const pos = {    "enabled": false,
      "x": 0,
      "y": 0,
      "z": 0};

         logger.innerHTML=
            `[BotLog] Starting moving to target location (${pos.x}, ${pos.y}, ${pos.z})`
         ;
         bot.pathfinder.setMovements(defaultMove);
         bot.pathfinder.setGoal(new GoalBlock(pos.x, pos.y, pos.z));

         bot.setControlState('jump', true);
   });


   bot.on('death', () => {
      logger.innerHTML = "[BotLog] Bot died";
   });

   bot.on('kicked', (reason) =>
    // bot kicked
      logger.innerHTML = `[BotLog] Bot kicked: ${reason}`
   );
   bot.on('error', (err) =>
      // bot error      
      logger.innerHTML = `[BotLog] Bot error: ${err}`
      
   );
}
