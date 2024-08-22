const fs = require("fs");
module.exports.config = {
  name: "Rohit",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Rohit",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("rohit")==0 || event.body.indexOf("Rohit")==0 || event.body.indexOf("@Rohit")==0 || event.body.indexOf("ROHIT")==0) {
    var msg = {
        body: "❤️𝐘𝐄 𝐋𝐎 ROHIT 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
        attachment: fs.createReadStream(__dirname + `/FAIZ/rohit.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }