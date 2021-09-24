var myArray = [17, "ate", "", false, 9];
function myBouncer(arr) {
    return arr.filter(value => !!value);
}
console.log(myBouncer(myArray));
module.exports = myBouncer;