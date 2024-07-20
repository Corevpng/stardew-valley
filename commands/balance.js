const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('balance')
    .setDescription('Mevcut bakiyenizi gösterir'),
  async execute(interaction) {
    const userId = interaction.user.id;
    const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

    const balance = usersData[userId] ? usersData[userId].balance : 0;

    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Bakiye Durumu')
      .setDescription(`Mevcut bakiyeniz: ${balance} altın`);

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};