const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sell')
    .setDescription('Envanterdeki ürünleri satar')
    .addStringOption(option =>
      option.setName('ürün')
        .setDescription('Satılacak ürün adı')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('miktar')
        .setDescription('Satılacak ürün miktarı')
        .setRequired(true)),
  async execute(interaction) {
    const product = interaction.options.getString('ürün');
    const amount = interaction.options.getInteger('miktar');
    const userId = interaction.user.id;

    const farmData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/farm.json')));
    const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

    let productIndex = farmData.production.findIndex(p => p.name === product);// discord.gg/codeblog
    if (productIndex === -1 || farmData.production[productIndex].quantity < amount) {
      const embed = new EmbedBuilder()
        .setColor(0xFF0000)
        .setTitle('Hata')
        .setDescription('Yeterli miktarda ürün yok.');

      return await interaction.reply({ embeds: [embed], ephemeral: true });
    }

    farmData.production[productIndex].quantity -= amount;
    const earnings = amount * farmData.production[productIndex].price;

    if (!usersData[userId]) {
      usersData[userId] = { balance: 0 };
    }
    usersData[userId].balance += earnings;

    fs.writeFileSync(path.join(__dirname, '../data/farm.json'), JSON.stringify(farmData, null, 2));
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(usersData, null, 2));

    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Ürün Satışı')
      .setDescription(`${amount} adet ${product} satıldı ve ${earnings} altın kazandınız.`);

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};