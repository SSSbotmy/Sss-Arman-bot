const fs = require("fs");
module.exports.config = {
  name: "Khan Sarkar",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Khan Sarkar",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Khan Sarkar")==0 || event.body.indexOf("Khan Sarkar")==0 || event.body.indexOf("aayat")==0 || event.body.indexOf("AAYAT")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐀𝐀𝐘𝐀𝐓 𝐉𝐈 𝐀 𝐆𝐘𝐄",
        attachment: fs.createReadStream(__dirname + `/FAIZ/aayat.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }