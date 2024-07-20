const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Bot komutları hakkında bilgi verir'),
  async execute(interaction) {
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
// discord.gg/codeblog
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Komutlar Listesi')
      .setDescription('Aşağıda mevcut komutların bir listesi bulunmaktadır:');

    for (const file of commandFiles) {
      const command = require(path.join(commandsPath, file));
      embed.addFields({ name: `/${command.data.name}`, value: command.data.description });
    }

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};