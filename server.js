const token = "NTE3NzcyNTI4MTM2MjI0Nzgw.DuJkjQ.ty7iJOmHM_Gn-VkLyrfJFdCfnFk";
const guildID = "443016383249383426";
const Discord = require("discord.js");
var bot = new Discord.Client();
var members;
bot.login(token);
bot.on('ready', () => {
    members = bot.guilds.get(guildID).members;
		console.log("Connected!");
});
bot.on('message', msg => {
  if (msg.content === '?members') {
    var resMembers = '';
    members.forEach(function(element) {
      if (!element.user.bot) {
        var spaces = " ".repeat(Math.abs(25 - element.user.username.length));
        var username = '\n**user:** ' + element.user.username;
        var userid = '**id:** ' + element.user.id;
        resMembers += username + spaces + userid;
      }
    });
    msg.reply(resMembers);
  }
  if (msg.content === '?boobs') {
    var urlBoobs = "https://2.bp.blogspot.com/-tQ9avM4_1Is/VGX0OZ23JqI/AAAAAAAD5Yg/Zj6_fYENAyw/s1600/1.jpg";
    const webAttachment = new Discord.Attachment(urlBoobs);
    msg.channel.send(webAttachment);
  }
});