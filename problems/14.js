/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let length = numbers.length;
    var dict = {};
    for (let x = 0; x < length; x++) {
        let number = numbers[x];
        if (!(number in dict)) {
            dict[number] = 1;
        }
        else {
            dict[number] += 1;
        }
    }

    let majority = Math.floor(length/2);
    for (var key in dict) {
        if (dict[key] > majority) {
            return parseInt(key);
        }

    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]
module.exports = {problem, tests};