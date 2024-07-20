const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('water')
    .setDescription('Bitkileri sular')
    .addStringOption(option =>
      option.setName('bitki')
        .setDescription('Sulamak istediğiniz bitki adı')
        .setRequired(true)),
  async execute(interaction) {
    const plant = interaction.options.getString('bitki');
    const farmData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/farm.json')));
    if (!farmData.plants.includes(plant)) {
      return interaction.reply({ content: 'Bu bitki mevcut değil.', ephemeral: true });
    }
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Bitki Sulama')
      .setDescription(`${plant} sulandı.`);
    await interaction.reply({ embeds: [embed], ephemeral: true });// discord.gg/codeblog
  },
};