exports.run = async (client, message, args) =>{
    message.channel.send("Use this link to join my support server: https://discord.gg/ZD32NV6")
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User",
    requiredPerms: []
    };

exports.help = {
    name: "support",
    category: "Utility",
    description: "Sends a link to Woomy's support/development server.",
    usage: "support"
    };
