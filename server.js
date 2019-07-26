const discord = require('discord.js');
const client = new discord.Client();
const bot = process.env.bot;
const statss = process.env.statss;
const Fort = require('fortnite');
const fortnite = new Fort(statss);


client.on("message",async msg=>{
    msghernefun(msg)
})

client.login(bot)
.then(console.log("Logged in discord"))

async function msghernefun(msg){
    if(msg.content.startsWith("!fhelp")){
        msg.reply("\nAvailable commands:\n!fabout - To know about me\n!fstat <profie_name> <platform | pc/psn/xbl> - To know your stats(Platform not needed if you are pc player :stuck_out_tongue_closed_eyes: ")
    }
    else if(msg.content.startsWith("!fabout")){
        msg.reply("\nI am Fortnite Stat bot made by Fiction Gaming\nI provide Fortnite Statistics of Fortnite Players\nUse !fhelp for available commands")
    }
    else if(msg.content.startsWith("!fstat")){
        const mss = msg.content.split(" ");
        const user = mss[1];
        const platform = mss[2] || "pc";
        
        fortnite.user(user,platform).then((usr)=>{
            if(usr.error==="Player Not Found"){
                msg.reply("\nPlayer not found. Please check the username again\nPut _ if you have a <space>")
            }   
            else msg.reply("```xml\nUsername = "+usr.username+"\nPlatform = "+usr.platform+"\nMatches = "+usr.stats.lifetime.matches+"\nKills = "+usr.stats.lifetime.kills+"\nWins = "+usr.stats.lifetime.wins+"\nK-D Ratio = "+usr.stats.lifetime.kd+"```")
        })
        .catch((error)=> {
            msg.reply("Please enter correctly\nCheck f!help for help")
        })
}
}
    