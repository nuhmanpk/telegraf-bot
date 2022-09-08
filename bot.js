const { Telegraf } = require("telegraf");

const bot = new Telegraf("YOUR_BOT_TOKEN_HERE");
bot.start((ctx) => ctx.reply("I'm Running on Telegraf"));
bot.command("help", (ctx) => ctx.reply("Help Works"));
bot.on("sticker", (ctx) =>
  ctx.replyWithSticker(
    "CAACAgUAAxkBAAEFyLNjGfp0a6emv-AbnJUxIrveMiYFggACxQEAAsTTqVSDFrDSj_I_PCkE"
  )
);
bot.hears("hello", (ctx) => ctx.reply("Hello from Telegraf"));

bot.launch();
