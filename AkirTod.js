/*
Jangan Hapus Wm
Menu Catalog No Enc
Spcial 150 Subrek
Nanti Gua Up Base Pribadi
Jangan Lupa Subrek
*/
/*
Thanks To
Allah SWT
Kedua Orang Tua
KirBotz
Ndyie Bot
*/
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const axios = require('axios')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const yts = require( 'yt-search')
const { exec, spawn, execSync } = require('child_process')


//━━━━━━━━━━━━━━━[ Lib  ]━━━━━━━━━━━━━━━\\
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText, runtime } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { TiktokDownloader } = require('./lib/gif.js')
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const bad = JSON.parse(fs.readFileSync('./database/bad.json'));
const Exif = require('./lib/exif');
const exif = new Exif();
const hx = require('hxz-api');
const brainly = require('brainly-scraper')
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
//━━━━━━━━━━━━━━━[ DATABASE  ]━━━━━━━━━━━━━━━\\
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
//━━━━━━━━━━━━━━━[ POTO  ]━━━━━━━━━━━━━━━\\
tamnel = fs.readFileSync('./shinoa.jpg')
kirtod = fs.readFileSync('./itsuki.jpg')
//━━━━━━━━━━━━━━━[ SETTING  ]━━━━━━━━━━━━━━━\\
 ownerNumber = ["6283129109022@s.whatsapp.net"]
 BotNumber = '14422455155'
 botName = "Shinoa"
 ownerName = 'Boedzhank'
 lolkeyy = 'isiapikeylu'
//━━━━━━━━━━━━━━━[ Public Self ]━━━━━━━━━━━━━━━\\
isSelf = false
isPublic = false
autorespon = false
ator = ''
namo = 'Created By ShinoaBot'
//━━━━━━━━━━━━━━━[ Jam ]━━━━━━━━━━━━━━━\\
function addMetadata(packname, author) {	// by Mhankbarbar
				if (!packname) packname = 'made by admin'; if (!author) author = 'made by admin';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./stickers/${name}.exif`)) return `./stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./stickers/${name}.exif`, buffer, (err) => {	
					return `./stickers/${name}.exif`	
				})	
}


function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
            }
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = Rendy = async (Rendy, kir) => {
	       try {
            if (!kir.hasNewMessage) return
            kir = kir.messages.all()[0]
			if (!kir.message) return
			if (kir.key && kir.key.remoteJid == 'status@broadcast') return
			if (kir.key.fromMe) return
			global.prefix
			global.blocked		
		    kir.message = (Object.keys(kir.message)[0] === 'ephemeralMessage') ? kir.message.ephemeralMessage.message : kir.message
			const content = JSON.stringify(kir.message)
			const from = kir.key.remoteJid
	        const type = Object.keys(kir.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && kir.message.conversation) ? kir.message.conversation : (type == 'imageMessage') && kir.message.imageMessage.caption ? kir.message.imageMessage.caption : (type == 'videoMessage') && kir.message.videoMessage.caption ? kir.message.videoMessage.caption : (type == 'extendedTextMessage') && kir.message.extendedTextMessage.text ? kir.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && kir.message.conversation.startsWith(prefix)) ? kir.message.conversation : (type == 'imageMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'videoMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'extendedTextMessage') && kir.message[type].text.startsWith(prefix) ? kir.message[type].text : (type == 'listResponseMessage') && kir.message[type].singleSelectReply.selectedRowId ? kir.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && kir.message[type].selectedButtonId ? kir.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(kir.message[type].fileSha256.toString('base64')) !== null && getCmd(kir.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(kir.message[type].fileSha256.toString('base64')) : ""
		    budy = (type === 'conversation') ? kir.message.conversation : (type === 'extendedTextMessage') ? kir.message.extendedTextMessage.text : ''
	     	selectedButton = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedButtonId : ''
            responseButton = (type == 'listResponseMessage') ? kir.message.listResponseMessage.title : ''
		    button = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedDisplayText : ''
	    	isImage = (type === 'imageMessage')
	    	const isVideo = (type === 'videoMessage')
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = Rendy.user.jid
		    const botNumberss = Rendy.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
        const isSimi = samih.includes(from)
		    let sender = isGroup ? kir.participant : kir.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await Rendy.chats.all()
		    const groupMetadata = isGroup ? await Rendy.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? welkom.includes(from) : false
		    const isAntiLink = isGroup ? antilink.includes(from) : false
            const conts = kir.key.fromMe ? Rendy.user.jid : Rendy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = kir.key.fromMe ? Rendy.user.name : conts.notify || conts.vname || conts.name || '-'
            
            const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 "h": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'jpegThumbnail': fs.readFileSync('./shinoa.jpg')
                        }
                       }
	                  } 
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\            
		mess = {
			wait: 'Wait bang',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

//
const sticOwner = (hehe) => {
			ano = fs.readFileSync('./stickers/admin/owner.webp')
			Rendy.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./stickers/admin/notadmin.webp')
			Rendy.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./stickers/admin/admin.webp')
			Rendy.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./stickers/admin/wait.webp')
			Rendy.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticKick = (hehe) => {
			ano = fs.readFileSync('./stickers/admin/kick.webp')
			Rendy.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./stickers/admin/ok.webp')
			Rendy.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}


if (!isGroup && !isCmd && !command && !kir.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${sender}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        Rendy.sendMessage(from, `${sami}`, text, {thumbnail: tamnel, sendEphemeral: true, quoted:kir, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
if (!isCmd && !command && isSimi && !kir.key.fromMe && !autorespon) {
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        Rendy.sendMessage(from, `${sami}`, text, {thumbnail: tamnel, sendEphemeral: true, quoted:kir, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
                      
if (!kir.key.fromMe && bad.includes(command)) {
			ano = fs.readFileSync('./stickers/admin/toxic.webp')
			Rendy.sendMessage(from, ano, sticker, { quoted: fgi})
				}
//

const hideTag = async function(from, text){
	       let anu = await Rendy.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Rendy.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./shinoa.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

             

        const listmsg = (from, title, desc, list) => { 
            let po = Rendy.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©ShinoaBot*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return Rendy.relayWAMessage(po, {waitForAck: true})
        }
        
        const reply = (teks) => {
            Rendy.sendMessage(from, teks, text, {quoted:fgi})
        }

        const replly = (teks) => {
			Rendy.sendMessage(from, teks, text, { thumbnail: tamnel, sendEphemeral: true, quoted: fgi, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${date}`,body:"SELECT",previewType:"PHOTO",thumbnail:tamnel,sourceUrl:`https://wa.me/p/6283129109022`}}})
		}
        
        const sendMess = (hehe, teks) => {
            Rendy.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Rendy.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Rendy.sendMessage(from, teks.trim(), extendedText, { quoted: kir, contextInfo: { "mentionedJid": memberr } })
        }            
            
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await Rendy.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Rendy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Rendy.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Rendy.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Rendy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return Rendy.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: kir, contextInfo: {"mentionedJid": men ? men : []}})
}
//━━━━━━━━━━━━━━━[ Fake Fakean ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            Rendy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Rendy.updatePresence(from, Presence.composing)
        Rendy.chatRead(from, "read")
        const fakegroup = (teks) => {
            Rendy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `Jangan Spam:(`, 
                            orderTitle: `Donate Donk:(`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Rendy.sendMessage(to, media, MessageType.sticker,{quoted:kir})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Rendy.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }              
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!kir.key.fromMe && isSelf === true) return
///Antilink
if (isGroup && !kir.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return replly('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
replly(`「 *LINK GRUP TERDETEKSI* 」\n\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
Rendy.groupRemove(from, [sender])
}, 2000);
}
}
//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\
switch (command) {             
//
case 'simih':
					if (!isGroup) return reply('Harus di group om')
					if (!isGroupAdmins) return reply('anda bukan admin')
					if (args.length < 1) return reply('Ketik simih 1 untuk mengaktifkan, ketik simih 0 untuk menonaktifkan')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 !!!')
						samih.push(from)
						fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ Mengaktifkan simi')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ Menonaktifkan simi')
					} else {
						reply('?')
					}
					break
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            Rendy.sendMessage(from,ram,image,{quoted:fgi,caption:rem})
            break
case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
case 'kusonime':
					if (args.length < 1) return reply('Apa yang mau dicari pak?')
					anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/anime/kusonime?search=${body.slice(10)}&apikey=ZeroYT7`, {method: 'get'})
					tod = anu.result
					const thumb = await getBuffer(tod.thumbs)
					const judul = tod.title
					const judul_jp = tod.title_jp
					const genre = tod.genre
					const producer = tod.producer
					const season = tod.season
					const type = tod.type
					const status = tod.status
					const total_episode = tod.total_episode
					const score = tod.score
					const deskripsi = tod.description
					const duration = tod.duration
					
       hasil = `┏━━❉ *KUSONIME* ❉━━\n┣⊱ *Judul* : ${judul}\n┣⊱ *Judul JP* :${judul_jp}\n┣⊱ *Genre* :  ${genre}\n┣⊱ *Producer* : ${producer}\n┣⊱ *Season* : ${season}\n┣⊱ *Type* : ${type}\n┣⊱ *Status* : ${status}\n┣⊱ *Total episode* : ${total_episode}\n┣⊱ *Score* : ${score}\n┣⊱ *Duration* : ${duration}\n┣⊱ *Deskripsi* : ${deskripsi}\n┗━━━━━━━━━━━━`
			
				Rendy.sendMessage(from, thumb, image, {quoted: fgi, caption: hasil})
				
setTimeout(function(){
teks = '❉──────────────────❉\n'
          for (let Y of tod.download) {
					teks += `\n*「 _Download_ 」*\n\n*➸ Resolution:* ${Y.resolution}\n\n*➸ Link:* ${Y.download_list[0].downloader}\n\n${Y.download_list[0].download_link}\n ❉──────────────────❉\n`
					}
Rendy.sendMessage(from, teks, text,{quoted:fgi})
}, 2000);
					break
case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉──────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					Rendy.sendMessage(from, teks, text,{quoted:fgi,detectLinks: false})                        
		            })              
					break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await Rendy.sendMessage(from,li,image,{quoted: fgi})
            break
    case 'shinoa':
            const bang = await hx.chara('shinoa')
            const njir = bang[Math.floor(Math.random() * bang.length)]
            const luwh = await getBuffer(njir)
            
            const buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              const imageMsg = (await Rendy.prepareMessageMedia(luwh, "imageMessage", { thumbnail: luwh, })).imageMessage
              const buttonsMessage = {footerText:'©Shinoa Bot', imageMessage: imageMsg,
              contentText:`Subrek yt : Shinoa Hiiragi`,buttons,headerType:4}
              const prep = await Rendy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Rendy.relayWAMessage(prep)
        
                    break
/*case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'waifu':
       case 'shota':
       
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
              
setTimeout(function(){
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Rendy.prepareMessageMedia(from, fs.readFileSync(`./${sender}.jpeg`), "imageMessage", { thumbnail: Buffer, })).imageMessage
            
              buttonsMessage = {footerText:'©Shinoa~Bot', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Rendy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Rendy.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
}, 2000);
              break*/
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await Rendy.sendMessage(from,di,image,{quoted: fgi})
            break
case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
case 'ssweb':
case 'ss':
                if (args.length < 1) return replly('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					Rendy.sendMessage(from, buff, image, {quoted: fgi, caption : teks})
					break
//
case 'menu':
case 'help':
thu = await Rendy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}`
Rendy.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6283129109022*
 💌EMAIL : *shinoahiiraginime@gmail.com*
 🔎YT : *https://youtube.com/c/ShinoaHiiargi*
 🪀GROUP : *https://chat.whatsapp.com/GuMJezBvPAd72XcBdcEbRg*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*メBoedzhanks⁴̅⁰͍⁴̵*
̵`, buttons: [{ buttonId: `#allmenu`, buttonText: { displayText: 'メ MENU' }, type: 1 },{ buttonId: `#owner`, buttonText: { displayText: 'メ OWNER' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirtod, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'allmenu':
	menunyai = `Hai Kak *${pushname}* ${ucapanWaktu}
	
*──────" INFORMASI "──────*
Nama Owner : *${ownerName}*
Nama Bot : *${botName}*
Runtime : ${runtime(process.uptime())}
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*──────" LIST MENU "──────*
*1>* ${prefix}owner
*2>* ${prefix}runtime
*3>* ${prefix}sticker
*4>* ${prefix}toimg
*5>* ${prefix}tourl
*6>* ${prefix}play
*7>* ${prefix}ytmp3
*8>* ${prefix}ytmp4
*9>* ${prefix}tiktok
*10>* ${prefix}faktaunik
*11>* ${prefix}katabijak
*12>* ${prefix}pantun
*13>* ${prefix}bucin
*14>* ${prefix}randomnama
*15>* ${prefix}welcome
*16>* ${prefix}antilink
*17>* ${prefix}asmaulhusna
*18>* ${prefix}jadwalsholat
*19>* ${prefix}quotes
*21>* ${prefix}cerpen
*22>* ${prefix}tagall
*23>* ${prefix}hidetag
*24>* ${prefix}chara
*25>* ${prefix}playstore
*26>* ${prefix}quotesanime
*27>* ${prefix}nulis
*28>* ${prefix}nuliskanan
*29>* ${prefix}nuliskiri
*30>* ${prefix}foliokanan
*31>* ${prefix}foliokiri
*32>* ${prefix}ssweb
*33>* ${prefix}cogan
*34>* ${prefix}cecan
*35>* ${prefix}cecanvietnam
*36>* ${prefix}cecanrandom
*37>* ${prefix}hijaber
*38>* ${prefix}santuy
*39>* ${prefix}ukhti
*40>* ${prefix}bocil
*41>* ${prefix}ghea
*42>* ${prefix}rika
*43>* ${prefix}cecanmalaysia
*44>* ${prefix}cecankorea
*45>* ${prefix}cecanthailand
*46>* ${prefix}cecanjapan
*47>* ${prefix}cecanindonesia
*48>* ${prefix}brainly(query)
	`
var imgs = await Rendy.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await Rendy.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": menunyai,
                        "footerText": `メBoedzhanks⁴̅⁰͍⁴̵`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `YouTube : Shinoa Hiiragi`,
                        "url": "OWNER : https://wa.me/6283129109022\nYT : https://youtube.com/c/ShinoaHiiragi\nGROUP : https://chat.whatsapp.com/GuMJezBvPAd72XcBdcEbRg"
                    },
                    "businessOwnerJid": "6283129109022@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            Rendy.relayWAMessage(ctlg)
            break
case 'rules':
thu = await Rendy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/6283129109022*_`
Rendy.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6283129109022*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
Nama Bot : *${botName}*
Runtime : ${runtime(process.uptime())}
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'メ Menu' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'cogan':
replly(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=KontoleBaperan`)
wmn = `Shinoabot`
trans = `Subrek YT : Shinoa Hiiragi`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
buff = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
mek = await getBuffer(buff.result.url)
  
   buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Rendy.prepareMessageMedia(mek, "imageMessage", { thumbnail: mek, })).imageMessage
              buttonsMessage = {footerText:'©Shinoa Bot', imageMessage: imageMsg,
              contentText:`Youtube : Shinoa Hiiragi`,buttons,headerType:4}
              prep = await Rendy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Rendy.relayWAMessage(prep)
        
                    break
case 'cecanvietnam':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Lupa Subscribe YT : ShinoaHiiragi'})
break
case 'cecanrandom':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, image, {quoted: fgi, caption: ''})
break
case 'hijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanmalaysia':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecankorea':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanindonesia':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanjapan':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanthailand':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'xnxxsearch':
    if (args.length == 0) return replly(`Example: ${prefix + command} Japanese`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=KemolX7&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Views : ${x.views}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Uploader : ${x.uploader}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
    }
    replly(ini_txt)
    break
case 'quotes':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=KontoleBaperan`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    replly(`_${quotes}_\n\n*â€• ${author}*`)
    break
case 'quotesanime':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=KontoleBaperan`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    episode = quotes.episode
    replly(`_${quote}_\n\n*• ${char}*\n*${episode}*`)
    break
case 'xnxx':
    if (args.length == 0) return replly(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=KemolX7&url=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `View : ${get_result.view}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Like : ${get_result.like}\n`
    ini_txt += `Dislike : ${get_result.dislike}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
    ini_txt += `Description : ${get_result.description}\n`
    ini_txt += "Link : \n"
    ini_link = get_result.link
    for (var x of ini_link) {
        ini_txt += `${x.type} - ${x.link}\n\n`
    }
    thumbnail = await getBuffer(get_result.thumbnail)
    await Rendy.sendMessage(from, thumbnail, image, { quoted: kir , caption: ini_txt })
    break
case 'nulis':
               if (args.length < 1) return replly('Yang mau di tulis apaan?')
               teks = args.join(' ')
               replly(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               Rendy.sendMessage(from, buff, image, {quoted: fgi, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'nuliskiri':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Rendy.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'nuliskanan':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Rendy.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'foliokiri':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Rendy.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'foliokanan':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Rendy.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
//━━━━━━━━━━━━━━━[ Owner Menu ]━━━━━━━━━━━━━━━\\                                              
case 'runtime':
            run = process.uptime() 
            teks = `${kyun(run)}`
            replly(teks)
            break  
case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = Rendy.contacts[i] != undefined ? Rendy.contacts[i].vname || Rendy.contacts[i].notify : undefined
inilist.push({
"displayName": 'Boedzhanks',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${Rendy.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await Rendy.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: fgi })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku >_<',
    footerText: `*メBoedzhanks⁴̅⁰͍⁴̵*`,
    buttons: button,
    headerType: 1
}
await Rendy.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fgi})
break
//━━━━━━━━━━━━━━━[ ISI PAKE CASE/FITUR LU ]━━━━━━━━━━━━━━━\\                                           
case 'cerpen':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=KemolX7`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break
case 'asmaulhusna':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=KemolX7`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=KemolX7`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=KemolX7`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=KemolX7`)
                    dasi = anu.result
                   sendButMessage(from, dasi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT `,
            },
            type: 1,
          },]);
        break
/*case 'sticker': 
case 'stiker':
case 's':
            if ((isMedia && !kir.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Rendy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && kir.message.videoMessage.seconds < 11 || isQuotedVideo && kir.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
                const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Rendy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break*/
            
case 'takestick':
					case 'take':
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Rendy.downloadAndSaveMediaMessage(encmedia, `./stickers/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./stickers/${sender}.webp -o ./stickers/${sender}.webp`, async (error) => {
							if (error) return reply('error bang')
							Rendy.sendMessage(from, fs.readFileSync(`./stickers/${sender}.webp`), sticker, {quoted: fgi})
							fs.unlinkSync(media)
							fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
						})
						break
case 'sticker': 
case 'stiker':
case 's':
if (isMedia && !kir.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
let media = await Rendy.downloadAndSaveMediaMessage(encmedia, `./stickers/${sender}`)
const packname = 'Created By Shinoa~bot'
const author = ''
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `data`)
exec(`webpmux -set exif ./stickers/data.exif ./stickers/${sender}.webp -o ./stickers/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Rendy.sendMessage(from, fs.readFileSync(`./stickers/${sender}.webp`), MessageType.sticker, {quoted: fgi})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/data.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./stickers/${sender}.webp`)
} else if ((isMedia && kir.message.videoMessage.fileLength < 10000000 || isQuotedVideo && kir.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
var pembawm = body.slice(9)
let media = await Rendy.downloadAndSaveMediaMessage(encmedia, `./stickers/${sender}`)
const packname = 'Created By Shinoa~Bot'
const author = ''
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `data`)
exec(`webpmux -set exif ./stickers/data.exif ./stickers/${sender}.webp -o ./stickers/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Rendy.sendMessage(from, fs.readFileSync(`./stickers/${sender}.webp`), MessageType.sticker, {quoted: fgi})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/data.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./stickers/${sender}.webp`)
} else{
reply(`Error`)
}
break


case 'toimg':
case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (kir.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('error')
							buffer = fs.readFileSync(ran)
							Rendy.sendMessage(from, buffer, image, {quoted: fgi})
							fs.unlinkSync(ran)
						})
					}
					break
case 'tourl':
            if ((isMedia && !kir.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
            owgi = await Rendy.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
case 'play':
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
             reply(mess.wait)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await Rendy.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await Rendy.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break              
case 'ytmp3':
             if(!q) return reply('linknya?')              
             res = await yta(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:fgi})
             break         
case 'ytmp4':
             if(!q) return reply('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break  
case 'tiktok': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break         
///fitur group
case 'bay':
      reply('Sayonara Buat Yang Pergi😔\nSemoga Amal Ibadahnya Di Terima\nTapi Kalo Lu Balik Harus Donasi')
      break
case 'selamatdatang':
      reply('Welcome Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kaka \nSemoga Betah👏')
      break
case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`anda bukan admin`)
					if (!isBotGroupAdmins) return reply(`Bot harus jadi admin`)
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Rendy.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
				break 
case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'tagall':
       if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL BY SHINOAHIIRAGI ]*\n${q ? q : ''}\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'hidetag':
      if (!isGroupAdmins && !isOwner) return 
      if (!isGroup) return reply(mess.only.group)
             try {
             quotedText = kir.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
//━━━━━━━━━━━━━━━[ AKHIR  ]━━━━━━━━━━━━━━━\\
default:
        if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(kir.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(kir.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Rendy.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
