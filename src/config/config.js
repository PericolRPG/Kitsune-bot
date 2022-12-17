export const token = 'OTEwNjIyMTM5MTEwMDA2ODQ1.GEjmD8.EDEM40ZndLA3CUDD4Xop4nf0eKpb9ewoGJAnws';
export const color = 'Yellow';
export const nicktitle = '\`www.crazyemp.site\`'
export const svunostru = '988445875921637407';
export const mentionbot = '<@910622139110006845>';

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import 'colors';

import * as cmds from '../cmds/commands.js';
const rest = new REST({ version: '9' }).setToken(token);
export const APP_ID = '910622139110006845';
async function main() {
    try {
        console.log('> '.green + 'Started refreshing applications' + ' (/) '.green + 'commands.')
        await rest.put(Routes.applicationCommands(APP_ID), {
            body: cmds.commands,
        });
        console.log('> '.green + 'Successfully roloaded applications' + ' (/) '.green + 'commands.')
    } catch (error) {
        console.error(error);
    }
}
main();