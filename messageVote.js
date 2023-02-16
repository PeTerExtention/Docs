const { Message, PermissionFlagsBits, ButtonBuilder, EmbedBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "vote",
  aliases: ["v", "top.gg", "Top.gg"],
  description: `Vote For Musico !`,
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
        .setEmoji('<:topgg:1075574316151881800>')
        .setLabel('Vote Me On Top.gg')
        .setStyle(ButtonStyle.Link),
    );

      const embed = new EmbedBuilder()
			.setColor(client.config.embed.color)
			.setTitle('Vote For Musico !')
			.setURL('https://discord.gg/9cAXP5j5Rc')
			.setDescription('Click on the Button to Vote for Musico !');

      await message.reply({ ephemeral: true, embeds: [embed], components: [row] });
  },
};
