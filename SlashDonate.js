const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const { links } = require("../../../settings/config");

module.exports = {
  name: "donate",
  aliases: ["dn", "d"],
  description: `Support me by donate`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["EMBED_LINKS"],
  category: "Information",
  cooldown: 5,
  type: "CHAT_INPUT",
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

   /**
   *
   * @param {JUGNU} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
   run: async (client, interaction, args, queue) => {
    // Code
    client.embed(
    interaction,
      `<:PayPal_Logo:1071892437926162492>[\`Donate Me On Paypal\`](https://www.paypal.me/musico541)`
    );
  },
};
