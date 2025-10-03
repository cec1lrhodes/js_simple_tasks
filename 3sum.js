const nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b); // уникаємо дублювання, сортуванням, зручно перевіряти [0] ==? [0]

          if (
            !result.some(
              (arr) =>
                arr[0] === triplet[0] &&
                arr[1] === triplet[1] &&
                arr[2] === triplet[2]
            )
          ) {
            result.push(triplet);
          }
        }
      }
    }
  }
  return result;
}
console.log(threeSum(nums));
