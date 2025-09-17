function _flatten(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('not an array');
    }

    const result = [];

    function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i]) // рекурсія
            } else {
                result.push(arr[i])
            }
        }
    }

    flatten(arr)

    return result
}


console.log(_flatten([1, 2, 3]));               // [1, 2, 3]
console.log(_flatten([1, [2, 3], 4]));          // [1, 2, 3, 4]
console.log(_flatten([[1, 2], [3, 4]]));        // [1, 2, 3, 4]
console.log(_flatten([1, [2, [3, [4, 5]]]]));   // [1, 2, 3, 4, 5]
console.log(_flatten([]));      