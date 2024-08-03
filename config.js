const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349012405008";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_41_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhzYklyTmFUc1pRY2FoWG1hQmp4dG5oTDZ3d1Q2RWo0ZzRVVDN3bXZEaTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhMdDlwZC1NU3BPbF9HemRDZG9ZOFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjliMTdiNWEtYThiMC00M2ZlLTg4ZmEtNDZiOGJjNTE5NTVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgMTgzLFxuICAgICAgOTEsXG4gICAgICA5MixcbiAgICAgIDE3NixcbiAgICAgIDExMyxcbiAgICAgIDE2OCxcbiAgICAgIDIzMCxcbiAgICAgIDE4OSxcbiAgICAgIDIyNCxcbiAgICAgIDI1MCxcbiAgICAgIDYwLFxuICAgICAgODAsXG4gICAgICA4MyxcbiAgICAgIDEzOCxcbiAgICAgIDk0LFxuICAgICAgMjEsXG4gICAgICA5NCxcbiAgICAgIDkyLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjAzLFxuICAgICAgNTUsXG4gICAgICAyMzMsXG4gICAgICAyMTMsXG4gICAgICA3MyxcbiAgICAgIDEwNixcbiAgICAgIDkwLFxuICAgICAgMTg5LFxuICAgICAgMTc2LFxuICAgICAgMTU3LFxuICAgICAgMjQwLFxuICAgICAgMjQwLFxuICAgICAgMjA3LFxuICAgICAgMTYwLFxuICAgICAgMjUwLFxuICAgICAgNTAsXG4gICAgICA2NyxcbiAgICAgIDQwLFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzk4UVhRSE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTI0MDUwMDg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpVREUgTUVMT0RZXCIsXG4gICAgXCJsaWRcIjogXCIxMTY2NTU5MDg3MjkwNjA6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYW8xYzBHRU92bXVMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpVejJaKzJQQUpoR21PRlZuTUQyTzlPTGFtK0RqUW9qTytkSy9TaDh0Q289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOVB0Z2dWTktuajBwSHRleWdib0FhWERwTWVGVWtiblVjMFFVOE5GTkZPdDBTY3poSXNQM3FobmVzcmcvOGRPTENQSjE4dm5jWUIxWEtFY29JYWV6RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWpTVTlIWWRIMURpNWNjcU56UXRGcHlCL0kxOUNRSmEvdHNHdnRWelVmSWsyOUs4R242ZHBEa0NFMTlpOWNjSFNJVXNuWVZtTjFTS2dMWkpDc3VIaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMjQwNTAwODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjkyNDYyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
