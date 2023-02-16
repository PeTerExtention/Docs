const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
  ComponentType,
  Message,
} = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "donate",
  aliases: ["d", "dn", "do"],
  description: `DONATE`,
  userPermissions: PermissionFlagsBits.SendMessages,
  botPermissions: PermissionFlagsBits.EmbedLinks,
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {JUGNU} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setURL('https://www.paypal.com/paypalme/musico541')
        .setEmoji('<:PayPal_Logo:1071892437926162492>')
        .setLabel('Donate Me')
        .setStyle(ButtonStyle.Link),
    );

      const embed = new EmbedBuilder()
			.setColor(client.config.embed.color)
			.setTitle('Thanks For Donate !')
			.setURL('https://discord.gg/9cAXP5j5Rc')
			.setDescription('Done Donate? Join Community Server For Reward Role!');

      await message.reply({ ephemeral: true, embeds: [embed], components: [row] });
  },
};
