const logs = [
    "user1 login",
    "user2 login",
    "user1 click",
    "user3 login",
    "user1 logout",
    "user2 click",
    "user2 logout",
    "user3 click",
    "user3 logout",
];

function analyzeLogs(logs) {
    const res = {};

    for (const log of logs) {
        const [user, action] = log.split(" ");
        if (!res[user]) {
            res[user] = 0;
        }
        res[user] += 1;
    }

    return res;
}

console.log(analyzeLogs(logs));



//   const res = logs.reduce((acc, log) => {
//   const [user] = log.split(" "); 
//   acc[user] = (acc[user] || 0) + 1; 
//   return acc;
// }, 
// { user1: 3, user2: 3, user3: 3 }





// console.log(analyzeLogs(logs));
// // { user1: 3, user2: 3, user3: 3 }