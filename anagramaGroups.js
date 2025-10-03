const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

function groupAnagrams(strs) {
  const res = {};
  for (let s of strs) {
    const sortedS = s.split("").sort().join(""); //"tops" → sortedS = "opst" → res["opst"] = ["pots","tops"]
    if (!res[sortedS]) {
      res[sortedS] = [];
    }
    res[sortedS].push(s);
  }
  return Object.values(res);
}

console.log(groupAnagrams(strs));
