function splitArrayInGroups(arr, n) {
    var result = [];
    while (arr.length > n) {
        result.push(arr.splice(0, n));
    }
    if (arr.length) {
        result.push(arr);
    }

    return result;
}
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
module.exports = splitArrayInGroups;