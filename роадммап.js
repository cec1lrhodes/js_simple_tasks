const nums = [-1, 0, 1, 2, 3];

function productExceptSelf(nums) {
  let leftSide = [];
  let rightSide = [];
  let result = [];

  // -->
  leftSide[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    leftSide[i] = leftSide[i - 1] * nums[i - 1];
  }

  //  <--
  rightSide[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightSide[i] = rightSide[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftSide[i] * rightSide[i];
  }

  return result;
}

console.log(productExceptSelf(nums));
