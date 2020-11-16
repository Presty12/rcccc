const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {

let embed1 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("HATA")
.setDescription("Bu Komutu Kullanmak İçin \`Register Staff\` Yetkisine Sahip Olmalısın")
if(!message.member.roles.cache.has("774295860145815572")) return message.channel.send(embed1);
  
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
let isim  =  args[1]
let yaş =  args[2]
let tag = "あ"

let kayıtlı = "774296819228213268"
let kayıtsız = "774319918484553759"

if(!user) return message.channel.send(`Lütfen geçerli bir ID belirtin`)
if(!isim) return message.channel.send(`Lütfen bir isim belirtin`)
if(!yaş) return message.channel.send(`Lütfen bir yaş belirtin`)
  
await user.setNickname(`KAYIT EDİLİYOR`)
user.roles.add("774296819228213268")
user.roles.remove("774319918484553759")  
message.react('✅')
setTimeout(() => {
user.setNickname(`${tag} ${isim} | ${yaş}`)},5000)
  
  
  
  
let embed2 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Kız Kayıt Yapıldı')
.setDescription(`<@${user.id}> Adlı Kullanıcı Kayıt Edildi. <@${kayıtsız.id}> Rolü Alınıp <@${kayıtlı.id}> Rolü Verildi`)
.setFooter(`<@${message.author.id}> Tarafından Kayıt Edildi`)
message.channels.cache.get('774268936262123535').send(embed2)  
  
  
  
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: "kız",
  description: "kız kayıt"
};