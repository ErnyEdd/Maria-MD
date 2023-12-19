const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "254715264486"
global.ownername = "ERNEST EDDY "
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Kenyan"

global.ownername = 'ERNEST' //owner name
global.botname = 'Anonymous-𝐌𝐃' //name of the bot

//sticker details
global.stickername = 'Tink3rb3ll✰'
global.packname = 'Poppy and'
global.author = 'Chupaps'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Erny botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/Jllsl2OaQNoBjepxzuVsZM'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium users only.DM TO purchase premium features',
    admin: 'This feature can be used by Ernest only',
    botAdmin: 'This feature can only be used when the bot is a group admin.Failure,amka ukafanye kazi ',
    owner: 'This feature can be used by Erny only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process..Tulia mkuu. ',    
    error: 'Error!Kwani hujijui',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
