// const text =
//   "Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT";

// function countBalance(message) {
//   let startName = false;
//   let endName = false;
//   let startAmount = false;
//   let endAmount = false;
//   let name = "";
//   let amount = "";

//   const result = {};

//   for (let i = 0; i < message.length; i++) {
//     const char = message[i].charCodeAt(0);

//     // #1
//     if (char === 64) {
//       startName = true;
//       continue;
//     }
//     // #2
//     if (startName && char === 47) {
//       startName = false;
//       endName = true;
//       continue;
//     }
//     // #3
//     if (startName && char !== 32) {
//       if (char >= 65 && char <= 90) {
//       name += String.fromCharCode(char + 32);
//      } else {
//         name += String.fromCharCode(char);
//          }
//     }
//     // #4
//     if (char >= 48 && char <= 57) {
//       startAmount = true;
//       endName = false;
//       amount += String.fromCharCode(char);
//       continue;
//     }

//     // #5
//     if (startAmount && char === 32) {
//       startAmount = false;
//       endAmount = true;
//     }
//     // #6
//     if (endAmount) {
//       result[name] = Number(amount);
//       amount = ""; // скидаємо флаг
//       name = "";
//       endAmount = false;
//     }
//   }

//   return result;
// }

// console.log(countBalance(text));

const text =
  "Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT. <@Katy /> won 5 Usdt";

function countBalance(message) {
  const result = {};

  const regex = /<@(\w+)[^>]*>\s*[^0-9]*?(\d+)\s*USDT/gi;
  let match;

  while ((match = regex.exec(message)) !== null) {
    const name = match[1].toLowerCase(); 
    const amount = Number(match[2]);     

    result[name] = (result[name] || 0) + amount; 
  }

  return result;
}

console.log(countBalance(text));


