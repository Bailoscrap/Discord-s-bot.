const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db"); 
const app = express(); 
module.exports = {
run(client,message,args) {

const prefix = client.prefix;

if(message.author.bot || !message.guild)return;
let embed = new Discord.MessageEmbed()
.setTitle(`Help Menu`)
.setAuthor(`${message.author.tag}`,message.author.avatarURL())
.setColor(`RANDOM`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
          .setDescription(
          `${client.user.username}\n Developers : <@864554279276904498>`)
.addField(`**● | ${prefix}help**`,`**\` قائمة \`**`)
.addField(`**● | ${prefix}line**`, `**\` لوضع الخط \`**`)
.addField(`**● | ${prefix}add-room**`, `**\` لاضافة روم الي الخط التلقائي \`**`)
.addField(`**● | ${prefix}clear-db**`,`**\` لمسح جميع البيانات الخاصة بالسيرفر \`**`)
.addField(`**● | ${prefix}set-line**`,`**\` لتحديد الخط \`**`)
.addField(`**● | ${prefix}set-reaction**`,`**\` لتحديد الريأكشن \`**`)
.addField(`**● | ${prefix}support**`, `**\` الدعم الفني للبوت \`**`)
  .setFooter(
          `Developed by : Bailo`,
          ``
        )
        .setTimestamp()
        .addField(
          `Links`,
          `[]`
        )
message.channel.send(embed)


    },
    config : {
        name: "help",
        alis : ["h"]
    }
}
