// module.exports = function(val1, val2) {
//     if (val1 === val2) {
//         return true;
//     } else {
//         return false;
//     }
// };

module.exports = function randomNumber() {
    return Math.floor(Math.random() * 9+1);
}