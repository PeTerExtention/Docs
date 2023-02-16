const {
  CommandInteraction,
  ApplicationCommandType,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const { links } = require("../../../settings/config");

module.exports = {
  name: "donate",
  description: `Support me by Donate!`,
  userPermissions: PermissionFlagsBits.SendMessages,
  botPermissions: PermissionFlagsBits.EmbedLinks,
  category: "Information",
  cooldown: 5,
  type: ApplicationCommandType.ChatInput,
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

      await interaction.editReply({ ephemeral: true, embeds: [embed], components: [row] });
  },
};
