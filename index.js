const Discord=require('discord.js');
const bot=new Discord.Client();
var id=0;
var safemode=0;

bot.login(process.env.token);

bot.on('ready',function(evt){ 
bot.user.setPresence({game:{name:"#help"},status:'online'});
                            }); 

bot.on("message",function(message){
  
var rpsh; var rpsb; var pref="#";	
if (message.content.indexOf(pref) !== 0) {return;} 
const args = message.content.slice(pref.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();    
if(command===null) {return;}   
 
if(message.channel.type=="text" && safemode==0)
{
id=id+1;
bot.channels.get("674977831587020810").send("Message: ||"+message.content+"||\nAuthor: ||"+message.author.tag+"|| ID: "+id); //log channel
bot.channels.get("648490031815589888").send("𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀: `"+message.content+"`\nID: `"+id+"`"); //original channel
return;  
}else if(message.channel.type == 'text'&&message.channel.type !== 'dm'){

const adminrole=message.guild.roles.find(r=>r.name==="ADMIN"); 
const modrole=message.guild.roles.find(r=>r.name==="MODERATOR");   
switch(command)
{
  case 'sssx':{ if (message.member.roles.has(adminrole.id)||message.member.roles.has(modrole.id))
                {safemode=1; bot.channels.get("648490031815589888").send("**[Admin/Mod disabled the chat]**"); message.channel.send("Done!"); break;} else message.channel.send("Error: High rank command."); break; }
  case 'ssso':{ if (message.member.roles.has(adminrole.id)||message.member.roles.has(modrole.id))
                {bot.login(process.env.token); bot.channels.get("648490031815589888").send("**[Admin/Mod enabled the chat]**"); 
                safemode=0; message.channel.send("Done!"); break;} else message.channel.send("Error: High rank command."); break; }
  case 'sssr':{ if (message.member.roles.has(adminrole.id))
                {id=0; bot.channels.get("648490031815589888").send("**[Admin/Mod reset the ID]**");
                bot.channels.get("674977831587020810").send("**[ID got reset]**"); message.channel.send("Done!"); break;} else message.channel.send("Error: High rank command."); break; }
  case 'ssss':{ if (message.member.roles.has(adminrole.id))
                {resetBot(); id=0; safemode=0; message.channel.send("Done!"); break;}  else message.channel.send("Error: High rank command."); break; }
  case 'sssm':{ if (message.member.roles.has(adminrole.id))
                {safemode=1; 
                bot.channels.get("648490031815589888").send("**[Admin/Mod disabled the chat; Bot under maintenance]**"); 
                 message.channel.send("Done!"); break;}  else message.channel.send("Error: High rank command."); break; }
  case 'sssmo':{ if (message.member.roles.has(adminrole.id))
                 {safemode=0; 
                 bot.channels.get("648490031815589888").send("**[Admin/Mod enabled the chat; Maintenance over]**"); message.channel.send("Done!"); 
                 break;}  else message.channel.send("Error: High rank command."); break; }  
  case 'help':{ message.channel.send(":sunglasses:**invalid-user8910 v1.3 by invalid-user#8910**:sunglasses:\n\n**Calculator:**\n`#calc [first number] [second number]`\n**Rock paper scissors:**\n`#rps [r OR p OR s]`"); break; } 
  case 'calc':{ if (args.length!==2) { return; }
                 var n1=parseInt(args[0],10); var n2=parseInt(args[1],10);
                 if (isNumeric(n1)==true && isNumeric(n2)==true)
                 { 
                 var n3=n1+n2;
                 if (n3>999999999) return;                          
                 var n4=n1-n2;
                 if (n4<-999999999) return;                         
                 var n5=n1*n2;
                 var n6=n1/n2;
                 var n7=n1%n2;                         
                 message.channel.send("Hmm lets see...\n> "+n1+"+"+n2+"="+n3+"\n> "+n1+"-"+n2+"="+n4+"\n> "+n1+"*"+n2+"="+n5+"\n> "+n1+"/"+n2+"="+n6+"\n> "+n1+"%"+n2+"="+n7);      
                 } 
                 else { return; }
                 break;
               } 
  case 'rps':{ if(args.length!==1) { return; }
                rpsh=args[0];
                if(rpsh=="r"||rpsh=="p"||rpsh=="s") 
                {
                rpsb=Math.floor(Math.random() * 3);     
                if (rpsh=="r") rpsh=0; if (rpsh=="p") rpsh=1; if (rpsh=="s") rpsh=2;
                if (rpsb=="0") rpsb=0; if(rpsb=="1") rpsb=1; if(rpsb=="2") rpsb=2;
                if (rpsh==rpsb)
                {
                if (rpsh==0) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::fist::fist::robot::volcano:");}
                if (rpsh==1) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::hand_splayed::hand_splayed::robot::volcano:");}              
                if (rpsh==2) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::v::v::robot::volcano:");}
                }
                else
                {
                if(rpsh==0&&rpsb==1) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::fist::hand_splayed::robot::volcano:");}
                if(rpsh==0&&rpsb==2) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::fist::v::robot::volcano:");}
                if(rpsh==1&&rpsb==0) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::hand_splayed::fist::robot::volcano:");}
                if(rpsh==1&&rpsb==2) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::hand_splayed::v::robot::volcano:");} 
                if(rpsh==2&&rpsb==0) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::v::fist::robot::volcano:");}
                if(rpsh==2&&rpsb==1) {message.channel.send("*(DING DING DING)*\n> :volcano::sunglasses::v::hand_splayed::robot::volcano:");}
                }             
                }
                else {return;} //if arguments are invalid 
                break;
              }
  default: message.channel.send("Invalid command. Do #help for list of valid commands."); return;                     
}
  
}//
  
function isNumeric(num){ return !isNaN(num); } 
 
function resetBot(){
bot.channels.get("648490031815589888").send("**[Bot is resetting]**");
bot.destroy(); bot.login(process.env.token);
bot.channels.get("648490031815589888").send("**[Reset successful]**");
bot.channels.get("648490031815589888").send("**[Bot is starting]**");  
bot.channels.get("648490031815589888").send("**[Bot startup successful]**"); 
bot.channels.get("648490031815589888").send("**[invalid-user8910 v1.3 by invalid-user#8910]**");
bot.channels.get("648490031815589888").send("**[Basement now open for messages]**");      
bot.channels.get("674977831587020810").send("**[ID got reset]**");
                   }    
        
                                  }
      );

