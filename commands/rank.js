// Rank

let rank = function() {
    bot.registerCommand("rank", (msg, args) => {
        if (dev == msg.author.id) {
            bot.createMessage(
                msg.channel.id,
                {
                    embed: {
                        description: msg.author.mention+" Your wish is my command **Bot Owner**!",
                        color: 0x008000,
                    }
                }
            );
        } else if (admin.includes(msg.author.id)) {
            bot.createMessage(
                msg.channel.id,
                {
                    embed: {
                        description: msg.author.mention+" Your wish is my command **Bot Admin**!",
                        color: 0x008000,
                    }
                }
            );
        } else if (msg.member.permissions.has("administrator")) {
            bot.createMessage(
                msg.channel.id,
                {
                    embed: {
                        description: msg.author.mention+" Your wish is my command **Discord Admin**!",
                        color: 0x008000,
                    }
                }
            );
        } else {
            bot.createMessage(
                msg.channel.id,
                {
                    embed: {
                        description: "You are a **Bot User** "+msg.author.mention+"!",
                        color: 0x008000,
                    }
                }
            );
        }
    }, {
        description: "Check your perms rank",
        fullDescription: "Responds with your bot command rank.",
        usage: "rank"
    });
};

module.exports = rank;