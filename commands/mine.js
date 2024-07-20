const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mine')
    .setDescription('Madencilik yapar')
    .addIntegerOption(option =>
      option.setName('kat')
        .setDescription('Kazılacak kat sayısı')
        .setRequired(true)),
  async execute(interaction) {
    const floors = interaction.options.getInteger('kat');
    const minerals = ['Taş', 'Demir', 'Altın', 'Elmas'];
    const minedMinerals = [];
    for (let i = 0; i < floors; i++) {
      const mineral = minerals[Math.floor(Math.random() * minerals.length)];
      minedMinerals.push(mineral);
    }
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('Madencilik')
      .setDescription(`${floors} kat kazıldı ve şu mineraller elde edildi: ${minedMinerals.join(', ')}`);
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};