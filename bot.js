const { Telegraf } = require("telegraf");

const bot = new Telegraf("YOUR_BOT_TOKEN_HERE"); // better use .env

bot.start((ctx) => ctx.reply("I'm Running on Telegraf")); // will be executed when /start 
bot.command("help", (ctx) => ctx.reply("Help Works")); // works when you type /help
bot.on("sticker", (ctx) => // when bot recives a sticker , it reply with a sticker according to the sticker-id mention in replyWithSticker()
  ctx.replyWithSticker(
    "CAACAgUAAxkBAAEFyLNjGfp0a6emv-AbnJUxIrveMiYFggACxQEAAsTTqVSDFrDSj_I_PCkE"
  )
);
bot.hears("hello", (ctx) => ctx.reply("Hello from Telegraf")); // triggered when bot gets "hello" as a message

bot.launch();
