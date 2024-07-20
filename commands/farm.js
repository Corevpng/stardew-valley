const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('farm')
    .setDescription('Çiftliğin genel durumunu gösterir'),
  async execute(interaction) {
    const farmData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/farm.json')));

    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Çiftlik Durumu')
      .setDescription('Çiftliğin genel durumu:')
      .addFields(
        { name: 'Bitkiler', value: farmData.plants.join(', ') || 'Yok' },
        { name: 'Hayvanlar', value: farmData.animals.join(', ') || 'Yok' },
        { name: 'Üretim', value: farmData.production.join(', ') || 'Yok' }
      );

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};