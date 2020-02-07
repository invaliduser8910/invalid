const Discord=require('discord.js');
const bot=new Discord.Client();
var id=0;
var safemode=0;
//login
bot.login(process.env.token);

bot.on("message",function(message){
if(message.channel.type==="dm" && safemode==0)
{
id=id+1;
bot.channels.get("674977831587020810").send("Message: "+message.content+"\nAuthor: "+message.author+" ID: "+id); //logs channel
bot.channels.get("648490031815589888").send("𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀: "+message.content+"\nID: `"+id+"`");
}
if(message.content==='+sssx'){
    safemode=1;
    bot.channels.get("648490031815589888").send("[Admin/Mod disabled the chat]");
    bot.channels.get("648490031815589888").send("[Bot under maintainence]");
}
if(message.content==='+ssso'){
    //login
    bot.login(process.env.token);
    bot.channels.get("648490031815589888").send("[Admin/Mod enabled the chat]"); //
    safemode=0;
}
if(message.content==='+sssr'){
id=0;
bot.channels.get("648490031815589888").send("[Admin/Mod reset the IDs]");
}
}
);
