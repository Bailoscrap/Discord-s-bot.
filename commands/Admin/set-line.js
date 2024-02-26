const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express();
module.exports = {
  run(client, message, args, db) {
        if (message.author.bot || !message.guild) return;
if (!message.member.hasPermission('ADMINISTRATOR'))return ;
    if (!db.get(`guild_${message.guild.id}`)) {
      db.set(`guild_${message.guild.id}`, {
        lineurl: "https://media.discordapp.net/attachments/1188446085866340394/1190001112468701264/1701671340330.png?ex=65a035e6&is=658dc0e6&hm=725dbae131b6fe2bb296fe6953f1064b5f8ae83768229435be7b40817076fd74&",
        reaction: "",
        channels: []
      });
    }

    if (message.content.includes("https://cdn.discordapp.com/attachments/")) {
      db.set(`guild_${message.guild.id}.lineurl`, args[0]);

      let att = new Discord.MessageAttachment(
        db.get(`guild_${message.guild.id}.lineurl`),
        "Line.gif"
      );

      return message.channel.send("**Done Updated The Line To**", att);
    } else {
      return message.channel.send(
        "**Please Enter A Vaild Discord Attachments URL**"
      );
    }
  },
  config: {
    name: "set-line",
    prems: "ADMINISTRATOR",
    type: "",
    alis: ["sl"]
  }
};
