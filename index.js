const Discord=require('discord.js');
const bot=new Discord.Client();
var id=0;
var safemode=0;

bot.login(process.env.token);

bot.on('ready',function(evt){
bot.user.setPresence({game:{name:"We're poor little souls, who have lost all control, and we're forced to take that role"},status:'online'});
}); 

bot.on("message",function(message){
 
 if(message.channel.type==="dm" && safemode==0)
{
id=id+1;
bot.channels.get("674977831587020810").send("Message: ||"+message.content+"||\nAuthor: ||"+message.author.tag+"|| ID: "+id); //logs channel
bot.channels.get("648490031815589888").send("𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀: `"+message.content+"`\nID: `"+id+"`");
}
if(message.content==='+sssx'){
    safemode=1;
    bot.channels.get("648490031815589888").send("**[Admin/Mod disabled the chat]**");
}
if(message.content==='+ssso'){
    //login
    bot.login(process.env.token);
    bot.channels.get("648490031815589888").send("**[Admin/Mod enabled the chat]**"); 
    safemode=0;
}
if(message.content==='+sssr'){
id=0;
bot.channels.get("648490031815589888").send("**[Admin/Mod reset the ID]**");
bot.channels.get("674977831587020810").send("**[ID got reset]**");
}
if(message.content==='+ssss'){
resetBot();
id=0;
safemode=0;   
}
if(message.content==='+sssm'){
safemode=1;
bot.channels.get("648490031815589888").send("**[Admin/Mod disabled the chat; Bot under maintenance]**");
}
if(message.content==='+sssmo'){
safemode=0;
bot.channels.get("648490031815589888").send("**[Admin/Mod enabled the chat; Maintenance over]**");
}  

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();	
if (!message.content.startsWith("frnd")) return;
else if (command === 'calc') {
	if (!args.length) {
		return message.channel.send(`Ok here: `);
	}

	message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}
 
function resetBot(){
bot.channels.get("648490031815589888").send("**[Bot is resetting]**");
bot.destroy();
bot.login(process.env.token);
bot.channels.get("648490031815589888").send("**[Reset successful]**");
bot.channels.get("648490031815589888").send("**[Bot is starting]**");  
bot.channels.get("648490031815589888").send("**[Bot startup successful]**"); 
bot.channels.get("648490031815589888").send("**[invalid-user8910 v1.1 by invalid-user#8910]**");
bot.channels.get("648490031815589888").send("**[Basement now open for messages]**");      
bot.channels.get("674977831587020810").send("**[ID got reset]**");
}    
    
    
}
);
