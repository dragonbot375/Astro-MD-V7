const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? '𝙷𝚒 !!! 🙂👨‍💻🖥️ /n ❖ 𝙸𝚖 ＡＬＩＶＥ 𝚗𝚘𝚠... /n ➣ 𝕄𝕪 ℕ𝕒𝕞𝕖 :- Ɗєαcσ bₒₜ➁ ᴰᶻ 𝛁 /n➣ 𝕆𝕨𝕟𝕖𝕣 :- 𝙃𝙖𝙧𝙨𝙝𝙖𝙣𝙖 𝙆 𝙋𝙧𝙚𝙢𝙖𝙡𝙖𝙡 /n ➣ ℙ𝕣𝕖𝕤𝕖𝕟𝕥𝕖𝕣 :- Mя.Ɗєαcσ /n ➣ ℂ𝕠𝕟𝕥𝕒𝕔𝕥 :- wa.me/chat:+94755982430 /n➣ 𝕋𝕚𝕜𝕥𝕠𝕜 ℙ𝕒𝕘𝕖 :- tiktok.com/@d_e_a_c_o' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/31c9a42f8a89dc3a27784.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? 'Ɗєαcσ bₒₜ➁ ᴰᶻ 𝛁' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝚋𝚢 Mя.Ɗєαcσᵗᵐ*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? '-' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID
};
