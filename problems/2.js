/**
 * Problem 2: Mapping
 * 
 * Given a list of names, create a list of strings that says "Hi {Name}".
 * Use the .map function.
 * 
 * @example ["Chase", "Raman"] -> ["Hi Chase", "Hi Raman"]
 */

function hello(name) {
    return "Hi " + name;
}
function problem(names) {
    return result = names.map(hello)

}

const tests = [
    [["Chase", "Raman"], ["Hi Chase", "Hi Raman"]],
    [["Mars"], ["Hi Mars"]],
    [[], []]
]

module.exports = {problem, tests};