const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fish')
    .setDescription('Balıkçılık yapar'),
  async execute(interaction) {
    const fishTypes = ['Levrek', 'Somon', 'Alabalık', 'Hamsi'];
    const fishCaught = fishTypes[Math.floor(Math.random() * fishTypes.length)];
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Balıkçılık')
      .setDescription(`${fishCaught} yakaladınız!`);
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};