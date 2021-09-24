function mySplice(arr1, arr2, n) {
    arr1.reverse();
    arr2.splice(n, 0, ...arr1);
  return arr2;
}
console.log(mySplice(["1", "2", "3"], ["4", "5"], 1));
module.exports = mySplice;