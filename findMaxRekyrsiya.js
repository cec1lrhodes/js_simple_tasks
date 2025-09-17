function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const maxRest = findMax(arr.slice(1));

    return arr[0] > maxRest ? arr[0] : maxRest;
}

console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-1, -5, -3]));    // -1
console.log(findMax([10]));            // 10