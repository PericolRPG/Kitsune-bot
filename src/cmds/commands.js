import { ApplicationCommandOptionType } from "discord.js"

export const commands = [
    {
        name: `ben`,
        description: `You asked Ben a question`,
        options: [
            {
                name: 'reason',
                description: `You asked Ben a question`,
                required: true,
                type: ApplicationCommandOptionType.String,
            }
        ]
    },{
        name: `duma`,
        description: `You asked duma.`
    },{
        name: `help`,
        description: `help from bot.`
    },{
        name: `slap`,
        description: `slap mention`,
        options: [
            {
                name: `mention`,
                description: `mention form slap`,
                type: 6,
                required: true
            }
        ]
    },  {
        name: 'love',
        description: 'mention',
        options: [
            {
                name: `user`,
                description: ` mention`,
                type: 6,
                required: true
            }
        ]
    }, {
        name: `addsheep`,
        description: `add asked sheep a question`,
        options: [
            {
                name: `reason`,
                description: `add asked sheep a question`,
                required: true,
                type: ApplicationCommandOptionType.String
            }
        ]
    }, {
        name: `addben`,
        description: `add asked Ben a question`,
        options: [
            {
                name: `reason`,
                description: `add asked ben a question (gifs/png/jpg)`,
                required: true,
                type: ApplicationCommandOptionType.String
            },
            {
                name: `reason2`,
                description: `add asked ben a question`,
                required: true,
                type: ApplicationCommandOptionType.String
            }
        ]
    }, {
        name: `tedi`,
        description: `tedi`,
    }, {
        name: 'cm',
        description: 'mention',
        options: [
            {
                name: `useravatar`,
                description: ` mention`,
                type: 6,
                required: true
            }
        ]
    }, {
        name: `botinfo`,
        description: `check from informations bot.`
    },{
        name: `addduma`,
        description: `You asked duma a question`,
        options: [
            {
                name: `reason`,
                description: `You asked duma a question`,
                required: true,
                type: ApplicationCommandOptionType.String
            }
        ]
    }
]