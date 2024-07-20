const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('collect')
    .setDescription('Ürünleri toplar')
    .addStringOption(option =>
      option.setName('ürün')
        .setDescription('Toplamak istediğiniz ürün adı')// discord.gg/codeblog
        .setRequired(true)),
  async execute(interaction) {
    const product = interaction.options.getString('ürün');
    const farmData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/farm.json')));
    const productIndex = farmData.production.findIndex(p => p.name === product);
    if (productIndex === -1 || farmData.production[productIndex].quantity <= 0) {
      return interaction.reply({ content: 'Bu ürün mevcut değil.', ephemeral: true });
    }
    farmData.production[productIndex].quantity -= 1;
    fs.writeFileSync(path.join(__dirname, '../data/farm.json'), JSON.stringify(farmData, null, 2));
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Ürün Toplama')
      .setDescription(`${product} toplandı.`);
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};// discord.gg/codeblog