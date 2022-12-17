import { Client } from 'discord.js';
import { token } from '../config/config.js';
const discord_client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGE_TYPING',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING',
    ],
});
discord_client.on('messageCreate', message => {
    if (message.content === 'sheep') {
        message.channel.send('baa');
    }
});
