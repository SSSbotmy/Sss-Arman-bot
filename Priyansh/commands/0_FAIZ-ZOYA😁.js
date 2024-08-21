const fs = require("fs");
module.exports.config = {
  name: "zoya",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "zoya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@ZOYA ❤🪽")==0 || event.body.indexOf("zoya")==0 || event.body.indexOf("Zoya")==0 || event.body.indexOf("ZOYA")==0) {
    var msg = {
        body: "❤️𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐙𝐎𝐘𝐀 𝐉𝐈 𝐀 𝐆𝐘𝐄",
        attachment: fs.createReadStream(__dirname + `/FAIZ/Z.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }