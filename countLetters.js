var args = process.argv[2];
console.log(args);
function countLetters(input) {
    var chars = {};

    for (let char of input) {
        if (!chars[char]) {
            chars[char] = 1;
        } else {
            chars[char]++;
        }
    }
    console.log(chars);
}

countLetters(args);