const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('feed')
    .setDescription('Hayvanları besler')
    .addStringOption(option =>
      option.setName('hayvan')
        .setDescription('Beslemek istediğiniz hayvan adı')
        .setRequired(true)),
  async execute(interaction) {
    const animal = interaction.options.getString('hayvan');
    const farmData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/farm.json')));
    if (!farmData.animals.includes(animal)) {
      return interaction.reply({ content: 'Bu hayvan mevcut değil.', ephemeral: true });
    }
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Hayvan Besleme')
      .setDescription(`${animal} beslendi.`);
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },// discord.gg/codeblog
};