const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('plant')
    .setDescription('Bitki ekimi yapar')
    .addStringOption(option =>
      option.setName('bitki')
        .setDescription('Ekim yapılacak bitki adı')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('miktar')
        .setDescription('Ekim yapılacak bitki miktarı')
        .setRequired(true)),
  async execute(interaction) {
    const plant = interaction.options.getString('bitki');
    const amount = interaction.options.getInteger('miktar');// discord.gg/codeblog

    const farmData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/farm.json')));
    for (let i = 0; i < amount; i++) {
      farmData.plants.push(plant);
    }

    fs.writeFileSync(path.join(__dirname, '../data/farm.json'), JSON.stringify(farmData, null, 2));

    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Bitki Ekimi')
      .setDescription(`${amount} adet ${plant} bitkisi ekildi.`);

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};