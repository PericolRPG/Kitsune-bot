/**
 * developed by pericolrpg (www.pericolrpg.site/leaks & www.pericolrpg.site/wz )
 */

import discord_bot from 'discord.js';
import * as config from './config/config.js';
import './extra/sheep.js';
import fs from 'fs';

export default  discord_client = new discord_bot.Client({
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
            name: "www.pericolrpg.site",
            type: 2,
            url: 'https://www.youtube.com/watch?v=5osYzXgdE-8'
        }],
        status: 'dnd'
    }
});
/**
 * Random de dume/sheep/ben
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/**
 * *mysql*
 */
var bendume = JSON.parse(fs.readFileSync('./src/mysql/ben.json'));
var Dumes = JSON.parse(fs.readFileSync('./src/mysql/dume.json'));
var sheep = JSON.parse(fs.readFileSync('./src/mysql/sheep.json'));
/**
 * commands (discord)
 */
discord_client.commands = new discord_bot.Collection();
/**
 * message create from discord.js 
 * mention
 */
/*discord_client.on('messageCreate',  msg => {
    switch (msg?.mentions.users.first()) {
        case discord_client.user: {
            var random = getRndInteger(0, sheep.length);
            msg?.reply({ content: `${sheep[random] ? `${sheep[random]}` : `Nu exista niciun sheep momentan`}` })
            break;
        }
    }
});
*/
//
/**
 * content chat (tag, wlc, etc) */ 
discord_client.on('messageCreate', async msg => {
    switch (msg.content) {
        case 'ip': {
            if (msg.guild.id !== config.svunostru) {
                msg.reply({
                    content: `\`❌\` Doar pe serveru **Crazy Empire**`
                })
            }
            else {
                msg?.reply({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setTitle(`${config.nicktitle} SMP`)
                            .setColor(config.color)
                            .setDescription(`> Mod: \`SMP\`\n> Versiune: \`1.18.1\`\n> IP/PORT: \`135.125.16.185:25565\``)
                            .setFooter({
                                text: msg?.guild.name,
                                iconURL: msg?.guild.iconURL({ dynamic: true })
                            })
                    ]
                })
            }
            break;
        }
        case 'tag': {
            if (msg.guild.id !== config.svunostru) {
                msg.reply({
                    content: `\`❌\` Doar pe serveru **Crazy Empire**`
                })
            }
            else {
                msg?.reply({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setTitle(`${config.nicktitle} tag`)
                            .setColor(config.color)
                            .setDescription('> <a:Owner:905096703839973446> **__gg/crazyemp__ in your about me !** <a:success:902091899802910760>')
                            .setFooter({
                                text: msg?.guild.name,
                                iconURL: msg?.guild.iconURL({ dynamic: true })
                            })
                    ]
                })
            }
            break;
        }
        case 'bnf': {
            if (msg.guild.id !== config.svunostru) {
                msg.reply({
                    content: `\`❌\` Doar pe serveru **Crazy Empire**`
                })
            }
            else {
                msg?.reply({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setTitle(`${config.nicktitle} bnf`)
                            .setColor(config.color)
                            .setDescription(`<a:hitting:902136310658109451> • Schimbarea Poreclei\n<a:Light_Saber_Dance:940586502323306546> • Acces la External Emojis\n<a:rolldance:902136829111857182> • Pic Perms pe <#1014156884095287337>`)
                            .setFooter({
                                text: msg?.guild.name,
                                iconURL: msg?.guild.iconURL({ dynamic: true })
                            })
                    ]
                })
            }
            break;
        }
        case 'wlc': {
            if (msg.guild.id !== config.svunostru) {
                msg.reply({
                    content: `\`:x:\` Doar pe serveru **Crazy Empire**`
                })
            }
            else {
                msg?.reply({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setTitle(`${config.nicktitle} wlc`)
                            .setColor(config.color)
                            .setDescription(`**${message.author} îți urează bun venit pe server <a:Light_Saber_Dance:940586502323306546>`)
                            .setFooter({
                                text: msg?.guild.name,
                                iconURL: msg?.guild.iconURL({ dynamic: true })
                            })
                    ]
                })
            }
            break;
        }
    } 
});

/**
 * slash commands - created by pericolrpg
 */
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
            break;
        }
        case 'tedi': {
            let tedi = Math.round(Math.random() * 100), user = interaction.options.get('user')?.user || interaction.user;
            await interaction.reply({ content: `**${user.username}** a bagat supradoza de tedi ${tedi}%!`, ephemeral: true });
            break;
        }
        case 'love': {
            let user = interaction.options.get('membru')?.user,
                lovenivel = Math.round(Math.random() * 100),
                loveLevel = "❤️".repeat(70 < lovenivel) || "💞".repeat(70 > lovenivel);
            await interaction?.reply({ content: `**${user.username}** + **${interaction.user.username}** = __${lovenivel}%__ of Love ${loveLevel}\nIt's a great score!`, })
            break;
        }
        case 'cm': {
            let gay = Math.round(Math.random() * 100), useravatar = interaction?.options.getMember('useravatar');
            await interaction?.reply({
                embeds: [
                    new discord_bot.EmbedBuilder()
                        .setTitle(`**${useravatar.username}'s INFO**`)
                        .setDescription(useravatar.username + ` Are penis de ${gay} cm!`)
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
                            iconURL: interaction?.guild.iconURL({dynamic: true})
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
                                name: `developed`, value: `> PericolRPG#7777`, inline: false
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
                            }, {
                                name: `hostname`, value: `> scyte hosting`, inline: false
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
                                .setLabel(`Invite bot`)
                                .setEmoji('🖇️')
                                .setStyle(discord_bot.ButtonStyle.Link)
                                .setURL(`https://discord.com/api/oauth2/authorize?client_id=${discord_client.user.id}&permissions=8&scope=bot%20applications.commands`)
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
        case 'addsheep': {
            if (!interaction?.member.permissions.has(discord_bot.PermissionFlagsBits.Administrator)) {
                return interaction?.reply({
                    content: `${acces}`,
                    ephemeral: true
                })
            }
            let reason = interaction?.options.getString('reason');
            var dumanoua = reason;
            sheep.push(dumanoua);
            var data = JSON.stringify(sheep, null, 2);
            fs.writeFile('./src/mysql/sheep.json', data, finished);

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
                            .setDescription('Sheep adaugat cu succes!')
                    ]
                })),
                    console.log(err ? ('something went wrong') : ('debug'));
            }
            break;
        }
        case 'addben': {
            if (!interaction?.member.permissions.has(discord_bot.PermissionFlagsBits.Administrator)) {
                interaction?.reply({
                    content: `${acces}`,
                    ephemeral: true
                })
            }
            let reason = interaction?.options.getString('reason');
            let reason2 = interaction?.options.getString('reason2');
            var dumanoua = reason;
            var dumanoua2 = reason2;
            bendume.push({ nameduma: dumanoua, nameduma1: dumanoua2 });
            var data = JSON.stringify(bendume, null, 2);
            fs.writeFile('./src/mysql/bendume.json', data, finished);
            
            function finished(err) {
                return  interaction.reply(err ? ({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setColor('Red') 
                            .setDescription('Ceva nu a mers bine')
                    ]   
                }) : ({
                    embeds: [
                        new discord_bot.EmbedBuilder()
                            .setColor('Green')
                            .setDescription('ben adaugata cu succes!')
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