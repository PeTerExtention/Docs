const {
  CommandInteraction,
  ApplicationCommandType,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonStyle,
  EmbedBuilder,
  ButtonBuilder,
} = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const { links } = require("../../../settings/config");

module.exports = {
  name: "vote",
  description: `Vote For Musico!`,
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
        .setURL('https://top.gg/bot/810540985032900648?s=0ccd00208d573')
        //.setEmoji('<:topgg:1075574316151881800>')
        .setLabel('Vote Me On Top.gg')
        .setStyle(ButtonStyle.Link),
    );

      const embed = new EmbedBuilder()
			.setColor(client.config.embed.color)
			.setTitle('Vote For Musico !')
			.setURL('https://discord.gg/9cAXP5j5Rc')
			.setDescription('Click on the Button to Vote for Musico !');

      await interaction.editReply({ ephemeral: true, embeds: [embed], components: [row] });
  },
};
