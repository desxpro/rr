const TelegramApi = require('node-telegram-bot-api')

const token = '5556650753:AAHqpTnq8qfH4bp2iKlYtlRNeK-W8-WWXZc'
const bot = new TelegramApi(token, {polling: true})

const fs = require("fs");
let file1 = fs.readFileSync('en.txt', 'utf-8')
let file2 = fs.readFileSync('ru.txt', 'utf-8')
const fileEN = file1.split('\n')
const fileRU = file2.split('\n')

const non = ['https://tlgrm.ru/_/stickers/53e/fd2/53efd2a4-f592-32a9-a053-9a5b65f4c5a4/2.webp','https://tlgrm.ru/_/stickers/53e/fd2/53efd2a4-f592-32a9-a053-9a5b65f4c5a4/3.webp','https://tlgrm.ru/_/stickers/53e/fd2/53efd2a4-f592-32a9-a053-9a5b65f4c5a4/4.webp','https://tlgrm.ru/_/stickers/cb3/19b/cb319bed-de12-33a8-80a1-9bd1b9d34b96/4.webp','https://tlgrm.ru/_/stickers/cb3/19b/cb319bed-de12-33a8-80a1-9bd1b9d34b96/7.webp','https://tlgrm.ru/_/stickers/5e1/2f6/5e12f697-13a0-34e7-ba12-eabe854de9b6/5.webp','https://tlgrm.ru/_/stickers/5e1/2f6/5e12f697-13a0-34e7-ba12-eabe854de9b6/11.webp']

function randomNon(file){
 const ff = [...file]
  const rand = [Math.floor(Math.random() * ff.length)]
   const most = ff[rand]
    return most
}
let masiv
const random = (file)=>{
   const ff = [... file]
    const rand = [Math.floor(Math.random() * ff.length)]
     const most = ff[rand]
      const index = ff.indexOf(most)
       const slovaru =fileRU[index]
        masiv = [most,slovaru]
         return masiv
}
random(fileEN)

  

bot.on('message',async msg =>{
 const text = msg.text
  const chatId = msg.chat.id
   if (text === '/start') {
    await bot.sendMessage (chatId, 'Я пишу слова на английском ты переводишь на Русский! Напиши "7" для подсказки ')
     await bot.sendMessage (chatId, 'Start ?')
      await bot.sendMessage (chatId, 'y/n ?')
   }
function sravn(str_txt, str_ru){
   const result = str_txt.toUpperCase() == str_ru.toUpperCase()
      return result
   }
   const start = sravn(text, masiv[1]) 
   
   if (text == '7'){
      await bot.sendMessage(chatId, masiv[1])
      random(fileEN)
      await  bot.sendMessage(chatId, masiv[0])}
   if (text == 'Y'){
      return bot.sendMessage(chatId, masiv[0])
   }
   if (text === 'y'){
    return bot.sendMessage(chatId, masiv[0])
   }
   if(text !== '/start' && start !== true && text !== '7'){
    await bot.sendSticker(chatId,randomNon(non))
   }
   if(start == true){
    await bot.sendMessage(chatId, ' ✅')
     random(fileEN)
      await bot.sendMessage(chatId, masiv[0])
   }
})


 






   
   
   

    





    
    
    
    


