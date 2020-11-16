const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `NOXUS AKTİF!`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require('./noxus.json')
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);



const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

//--------------------------------KOMUTLAR-------------------------------\\




client.on('guildMemberAdd', async member => {
    member.setNickname(`あ İsim | Yaş`)
});

client.on('guildMemberAdd', async member => {
    member.roles.add("774319918484553759")
});


client.on('guildMemberAdd', (member, msg) => {
    const moment = require('moment')
    let günler = {
        "0": "Pazar",
        "1": "Pazartesi",
        "2": "Salı",
        "3": "Çarşamba",
        "4": "Perşembe",
        "5": "Cuma",
        "6": "Cumartesi",
    }
    let aylar = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
    }
    let log = "774268936262123535";
    let kişi = member.guild.memberCount
    let endAt = member.user.createdAt
    let gün = moment(new Date(endAt).toISOString()).format('DD')
    let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
    let yıl = moment(new Date(endAt).toISOString()).format('YYYY')
    let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
    let kuruluş = `${gün} ${ay} ${yıl} ${saat}`
    let presty = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`
<@${member.id}> Sunucumuza Hoşgeldin! Seninle Birlikte \`${kişi}\` Kişiyiz 
Kayıt Olmak İçin Kayıt Odalarında <@&774295860145815572> Rolündeki Yetkililere Ses Teyit Vermen Gerekli
Tagımızı Alarak Bize Destek Olabilirsin
Tagımız : \`\`\`あ\`\`\`

       **Hesap Bilgilerin**

Hesap ID : ${member.id}
Hesap Kuruluş Tarihi : ${kuruluş}`)

    .setImage("https://cdn.discordapp.com/attachments/748103845065785404/774328471492886578/ezgif.com-crop_3.gif")
    .setFooter("RGOU 🖤 Tessaract")
    client.channels.cache.get(log).send(presty)

})


client.on("guildMemberAdd", async member => {
      let gkisi = client.users.cache.get(member.id);
      const ktarih = new Date().getTime() - gkisi.createdAt.getTime();   

    if (ktarih < 2592000001) {
    member.roles.add("774324920511103037")
      member.roles.remove("774319918484553759")
    
    }else{
    
    member.roles.add("774319918484553759")
     member.roles.remove("774324920511103037")
    
      }
});


