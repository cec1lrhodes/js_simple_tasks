const num = [1, 2, 2, 3, 3, 3];

function topKFrequent(nums, k) {
  const res = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    res[current] = (res[current] || 0) + 1; // {1 : 1, 2 : 1, 2 : 2, ...}
  }

  const entries = Object.entries(res) // -> [["1", 1], ["2", 2], ["3", 3]]
    .sort((a, b) => b[1] - a[1]) // сортуємо за частотою
    .slice(0, k) // беремо тільки k елементів
    .map((entry) => Number(entry[0])); // дістаємо числа

  return entries;
}
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));

// [1,2,2,3,3,3]   --(count)-->  {1:1, 2:2, 3:3}
//                               |
//                               V
//                     [["1",1], ["2",2], ["3",3]]
//                               |
//                           (sort by 2nd)
//                               |
//                     [["3",3], ["2",2], ["1",1]]
//                               |
//                            (slice k=2)
//                               |
//                     [["3",3], ["2",2]]
//                               |
//                            (map keys)
//                               |
//                            [3, 2]  <-- answer
