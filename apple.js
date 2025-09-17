const text = '<@Kate />:apple: <@Max/<>@alisa /> :like: received:apple::apple:'

function countEmoji(message, emoji) {
const result = {}
let startName = false;
let endName = false;
let startEmoji = false;
let endEmoji = false;
let name = '';
let emojiBuf = '';
let correctEmoji = false;



for (let i = message.length - 1; i >= 0; i--) {
  const char = message[i].charCodeAt(0);

if(char === 58 && !startEmoji){
  startEmoji = true;
  emojiBuf = '';
  continue;
}

if (startEmoji && char !== 58){
  emojiBuf = String.fromCharCode(char) + emojiBuf;
  continue;
}

if (char === 58 && startEmoji){
  if (emojiBuf){
   result[emojiBuf] = (result[emojiBuf] || 0) + 1;
  }
  startEmoji = false;
  emojiBuf = '';
  continue
}
if (char === 47 && message[i - 1] === ' '){ // '/' та пропустити пробіл ?
startName = true;
continue;
}
if (startName){
  name += char
  continue;
}
if(startName && char === 64){
  startName = false;
  endName = true;
}
if(endName){
  result[name] = emojiBuf;
  name = '';
  emojiBuf = '';
  endName = false;
}


}
return result[emoji] || 0;
}
console.log(countEmoji(text, 'apple'));



// expected result
// {
// kate: 1,
// max: 2,
// alisa: 2
// }
// > 62 
// / 47
// @ 64

// 58
// 101
// 108
// 112
// 112
// 97
// 58