const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
  
let embed1 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("HATA")
.setDescription("Bu Komutu Kullanmak İçin \`Register Staff\` Yetkisine Sahip Olmalısın")
if(!message.member.roles.cache.has("774295860145815572")) return message.channel.send(embed1);

  
  
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
if(!user) {return message.channel.send('Geçerli Bir Kullanıcı ID Beliirtin')}
let rol = message.guild.roles.cache.find(r => r.id === '774324920511103037')
if(!rol) {return message.channel.send('Bir Hata Oldu!')}
let rolal = message.guild.member(user)
rolal.roles.remove(rol)
  
  
let embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Rol Alma Başarılı')
.setDescription(`Şüpheli Rolü Alınan Kullanıcı <@${user.id}> Komutu Kullanan Yetkili <@${message.author.id}>`)
client.channels.cache.get('774268936262123535').send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'al',
    description: 'al',
    usage: 'al'
};