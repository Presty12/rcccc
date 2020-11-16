const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
 if(!message.member.roles.cache.has('774295860145815572')) return message.channel.send('**Bu komutu kullanabilmek için \`Register Staff\` yetkisine sahip olmasınız.**')

  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  let isim = args[1]
  let yaş = args[2]
  let tag = "あ"
  
  
if(!user) return message.channel.send(`Lütfen geçerli bir ID belirtin`)
if(!isim) return message.channel.send(`Lütfen bir isim belirtin`)
if(!yaş) return message.channel.send(`Lütfen bir yaş belirtin`)
  
user.setNickname(`${tag} ${isim} | ${yaş}`);
  
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("İsim Değiştirme Başarılı!")
.setDescription(`Kullanıcının Adı Başarıyla Değiştirildi Yeni Adı \`${tag} ${isim} | ${yaş}\``)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'nick',
}