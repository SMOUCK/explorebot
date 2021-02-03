const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix , token } = require('./config.json');

bot.login(token);


bot.on('ready', () => {
    console.log('Bot On');
    bot.user.setActivity('Explore Shop', { type: 'WATCHING' });
})

bot.on('message', async message => {

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]; 

    if (cmd === `${prefix}buy`) {

        let embed = new Discord.MessageEmbed()
            .setTitle('Expore Shop')
            .setDescription(['**How to buy our products ?**',
                'Contact an owner to buy via DM (message) or create a ticket',
                ' ',
                '<:RedEngine:740962375317848104> **Red Engine Prices:**',
                ' ',
                '★ LIFETIME <a:4745_thisr:740969764658216983> 40€',
                ' ',
                '★ 1 Month <a:4745_thisr:740969764658216983> 20€',
                ' ',
                '★ 1 Week <a:4745_thisr:740969764658216983> 10€',
            ])
            .setImage('https://cdn.discordapp.com/attachments/628418104812240912/631653739161321531/spacerezr_la_mysere.gif')
            .setThumbnail('https://media.discordapp.net/attachments/740906333133471786/741382864490463292/exploreshoplogo.gif')
            .setFooter('Explore Shop', 'https://cdn.discordapp.com/attachments/720270849558708254/806578043648344114/unknown.png')
            .setColor('RED')

        message.reply('**I sent you all prices in a private message**')
        message.author.send(embed);

        return;
    }

    if (cmd === `${prefix}services`) {

        let embed = new Discord.MessageEmbed()
            .setTitle('Services')
            .setDescription(['**If you want to buy this services in your server, create a ticket, or contact an owner.**',
                'Payment method is only PayPal. <:PayPal:740962615445946448>',
                ' ',
                '`Prices:`',
                ' ',
                '<a:Verify_Green:740962703283191848> Money <a:4745_thisr:740969764658216983> 5€',
                ' ',
                '<a:Verify_Green:740962703283191848> Weapons <a:4745_thisr:740969764658216983> 5€',
                ' ',
                '<a:Verify_Green:740962703283191848> Dump 1 server <a:4745_thisr:740969764658216983> 5€'
            ])
            .setImage('https://cdn.discordapp.com/attachments/628418104812240912/631653739161321531/spacerezr_la_mysere.gif')
            .setThumbnail('https://media.discordapp.net/attachments/740906333133471786/741382864490463292/exploreshoplogo.gif')
            .setFooter('Explore Shop', 'https://cdn.discordapp.com/attachments/720270849558708254/806578043648344114/unknown.png')
            .setColor('RED')

        message.channel.send(embed);

        return;
    }

    if (cmd === `${prefix}rules`) {

        let embed = new Discord.MessageEmbed()
            .setTitle('Explore Shop Rules')
            .setDescription(['Conditions',
                '<a:RedX:740962645167046717> 1) With your active subscription, you are NOT allowed to auth your friends.',
                '<a:RedX:740962645167046717> 2) You are not allowed to use any resources which provide on this server.',
                '<a:RedX:740962645167046717> 3) You are not allowed to decompile the program/executor.',
                '<a:RedX:740962645167046717> 4) You are not allowed to rename / modify menu.',
                '<a:RedX:740962645167046717> 5) You are not allowed to copy or share menu.',
                '<a:RedX:740962645167046717> 6) If you rip people off, you\'ll be immediately blacklisted.',
                '<a:RedX:740962645167046717> 7) You are not allowed to request a refund. / If you have any issues, DM me personally <@380027609616089099> or <@742748414772641833> or open a ticket in <#740918784218365993>',
                ' ',
                '<a:RedX:740962645167046717> Those caught breaking any of the rules above will have their subscription terminated immediately and you will be banned from the server.'
            ])
            .setImage('https://cdn.discordapp.com/attachments/628418104812240912/631653739161321531/spacerezr_la_mysere.gif')
            .setThumbnail('https://media.discordapp.net/attachments/740906333133471786/741382864490463292/exploreshoplogo.gif')
            .setFooter('Explore Shop', 'https://cdn.discordapp.com/attachments/720270849558708254/806578043648344114/unknown.png')
            .setColor('RED')

        message.channel.send(embed);

        return;
    }

    if (cmd === `${prefix}redengine-undetected`){
        let embed = new Discord.MessageEmbed()
            .setTitle('RedEngine Status')
            .setDescription(['<-------------------->',
                ' ',
                '<a:GreenCheckMark:740962601969778729> Working',
                ' ',
                '<a:GreenCheckMark:740962601969778729> Undetected',
                ' ',
                '<-------------------->'
            ])
            .setImage('https://cdn.discordapp.com/attachments/628418104812240912/631653739161321531/spacerezr_la_mysere.gif')
            .setFooter('Explore Shop', 'https://cdn.discordapp.com/attachments/720270849558708254/806578043648344114/unknown.png')
            .setColor('RED')

        message.channel.send(embed);

        return;
    }

    if (cmd === `${prefix}redengine-detected`){
        let embed = new Discord.MessageEmbed()
            .setTitle('RedEngine Status')
            .setDescription(['<-------------------->',
                ' ',
                '<a:RedX:740962645167046717> Not Working',
                ' ',
                '<a:RedX:740962645167046717> Detected',
                ' ',
                '<-------------------->'
            ])
            .setImage('https://cdn.discordapp.com/attachments/628418104812240912/631653739161321531/spacerezr_la_mysere.gif')
            .setFooter('Explore Shop', 'https://cdn.discordapp.com/attachments/720270849558708254/806578043648344114/unknown.png')
            .setColor('RED')

        message.channel.send(embed);

        return;
    }
})

