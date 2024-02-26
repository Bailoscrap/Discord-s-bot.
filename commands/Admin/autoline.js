const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express();
module.exports = {
  run(client, message, args, db) {
        if (message.author.bot || !message.guild) return;

    if (!db.get(`guild_${message.guild.id}`)) {
      db.set(`guild_${message.guild.id}`, {
        lineurl: "https://media.discordapp.net/attachments/1188446085866340394/1190001112468701264/1701671340330.png?ex=65a035e6&is=658dc0e6&hm=725dbae131b6fe2bb296fe6953f1064b5f8ae83768229435be7b40817076fd74&",
        reaction: "",
        channels: [1190005667843547218]
      });
    }

    let rooms = db.get(`guild_${message.guild.id}`).channels;

    if (rooms.includes(message.channel.id)) {
      if(message.author.bot)return;
      if (
        !db.get(`guild_${message.guild.id}.lineurl`) &&
        !db.get(`guild_${message.guild.id}.reaction`)
      )
        return message.channel.send(
          `**Please put the line or reaction at least**`
        );

      let att = new Discord.MessageAttachment(
        db.get(`guild_${message.guild.id}.lineurl`),
        "Line.gif"
      );

      message.channel.send(att).catch(x => x);
      if (db.get(`guild_${message.guild.id}.reaction`))
        message
          .react(db.get(`guild_${message.guild.id}.reaction`))
          .catch(x => message.channel.send("You Must Add A React"));

      return;
    }
  },
  config: {
    name: "",
    type: "messageEvent",
    alis: []
  }
};
