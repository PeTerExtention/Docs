const { Message, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const { links } = require("../../../settings/config");

module.exports = {
  name: "invite",
  aliases: ["inv", "addme"],
  description: `Invite Me Today!`,
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
        .setURL('https://discord.com/api/oauth2/authorize?client_id=810540985032900648&permissions=2150755440&scope=bot')
        .setLabel('Invite Me')
        .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
        .setURL('https://discord.gg/9cAXP5j5Rc')
        .setLabel('Support')
        .setStyle(ButtonStyle.Link),
    );

      const embed = new EmbedBuilder()
			.setColor(client.config.embed.color)
			.setTitle('Musico')
			.setURL('https://discord.gg/9cAXP5j5Rc')
			.setDescription('Want Me in Your Server? Invite Me Today!');

      await message.reply({ ephemeral: true, embeds: [embed], components: [row] });
  },
};
