const server = require("./server.js")();

const config = require("./config");
const aoi = require("aoi.js");
const bot = new aoi.Bot({
  prefix:config.bot.prefix,
  token:config.bot.token
});
bot.variables(require("./vars.js"));
bot.status({
  text:config.status.text,
  type:config.status.type
});
bot.onMessage();
//CODES ☟︎︎︎

bot.readyCommand({
  channel:"",
  code:`$log[Ready on $usertag[$clientID]]`
});

bot.command({
  name:"ping",//command name
  code:`pong! $pingms`//command code
});
