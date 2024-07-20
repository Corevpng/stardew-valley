const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('harvest')
    .setDescription('Hasat yapar')
    .addStringOption(option =>
      option.setName('bitki')
        .setDescription('Hasat edilecek bitki adı')
        .setRequired(true)),
  async execute(interaction) {
    const plant = interaction.options.getString('bitki');
    const farmData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/farm.json')));
    const plantIndex = farmData.plants.indexOf(plant);
    if (plantIndex === -1) {
      return interaction.reply({ content: 'Bu bitki mevcut değil.', ephemeral: true });
    }
    farmData.plants.splice(plantIndex, 1);
    const productIndex = farmData.production.findIndex(p => p.name === plant);
    if (productIndex === -1) {
      farmData.production.push({ name: plant, quantity: 1, price: 10 }); // Varsayılan fiyat ve miktar
    } else {
      farmData.production[productIndex].quantity += 1;
    }
    fs.writeFileSync(path.join(__dirname, '../data/farm.json'), JSON.stringify(farmData, null, 2));
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Hasat')
      .setDescription(`${plant} hasat edildi.`);
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};