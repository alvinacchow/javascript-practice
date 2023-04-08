/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let spaceless = str.replace(/\s+/g, '').toLowerCase();
    let reversed = spaceless.split('').reverse().join('').toLowerCase();

    for (let i = 0; i < spaceless.length; i ++) {
        if (spaceless[i] !== reversed[i]) {
            return false;
        }
    }
    return true;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};
