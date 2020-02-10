const Discord=require('discord.js');
const bot=new Discord.Client();
var id=0;
var safemode=0;

bot.login(process.env.token);

bot.on('ready',function(evt){
bot.user.setPresence({game:{name:"#help"},status:'online'});
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
 if(message.content==='#help'){
message.channel.send("**Calculator:**\n`#calc [first number] [second number]`");
} 
 
 //////////
 
  var pref="#";	
   if (message.content.indexOf(pref) !== 0) return;
const args = message.content.slice(pref.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command==="calc" && args.length==2){
  var n1=parseInt(args[0],10);
  var n2=parseInt(args[1],10);
   if (isNumeric(n1)==true && isNumeric(n2)==true)
                         { 
                      
 var n3=n1+n2;
 if (n3>999999999) return;                          
 var n4=n1-n2;
 if (n4<-999999999) return;                         
 var n5=n1*n2;
 var n6=n1/n2;
 var n7=n1%n2;                         
message.channel.send("Hmm lets see...\n> "+n1+"+"+n2+"="+n3+"\n> "+n1+"-"+n2+"="+n4+"\n> "+n1+"*"+n2+"="+n5+"\n> "+n1+"/"+n2+"="+n6+"\n> "+n1+"%"+n2+"="+n7);    }                }
else return;

function isNumeric(num){
  return !isNaN(num)
} 
 ///////////
 
 if(command=="rps"&&args.length==1){
  var eslot1; var eslot2; var eslot3;
  eslot1=":fist:"; eslot2=":hand_splayed:"; eslot3=":v:";
  var rpshuman=args[1];
  if(rpshuman=="r"||"p"||"s"){var rpsbot=Math.floor(Math.random() * 3);} else {return;}
if (rpshuman=="r") rpshuman=0;  if (rpshuman=="p") rpshuman=1;  if (rpshuman=="s") rpshuman=2; 
 if(rpsbot==rpshuman){if(rpshuman==0) message.channel.send(":robot::fist::fist::sunglasses: `**TIE!!!**`");}
  if(rpshuman==1) {message.channel.send(":robot::hand_splayed::hand_splayed::sunglasses: `**TIE!!!**`");}
     if(rpshuman==2) message.channel.send(":robot::v::v::sunglasses: `**TIE!!!**`");}
  else if(rpshuman||rpsbot!=0){if (rpshuman=2) message.channel.send("win "+rpsbot+" "+rpshuman); else message.channel.send("lose "+rpsbot+" "+rpshuman); }
else if(rpshuman=0) {message.channel.send("win"); else message.channel.send("lose "+rpsbot+" "+rpshuman); }
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
