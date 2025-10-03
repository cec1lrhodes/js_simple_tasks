const numbs = [3, 4, 5, 6];
const target = 7;

function twoSum(nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i, j);
      }
    }
  }
  return res;
}

console.log(twoSum(numbs));

// const numbs = [3, 4, 5, 6];

// function twoSum(nums, target) {
//   let res = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         res.push([i, j]);
//       }
//     }
//   }
//   return res;
// }

// console.log(twoSum(numbs, 9));
