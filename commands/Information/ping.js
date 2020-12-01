/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require("discord.js")
module.exports = {
    name: 'ping',
    description: 'Shows bots ping',
    execute(client, message, args) {
            message.channel.send(':ping_pong: | Pong...').then(sent => {
                let ping = sent.createdTimestamp - message.createdTimestamp
                const PingEmbed = new Discord.MessageEmbed()
                .addField("Gecikme", `${ping}`)
                .addField("API", `${Math.round(client.ws.ping)}`)
                sent.edit(PingEmbed);
           
            });
        }};
