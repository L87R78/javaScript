
function matchWords(input) {
    let result = "";

    for (let str of input) {
        result += escapeChars(str);
    }
    console.log(result);

    function escapeChars(str) {
        return str.replace(/\w+/g, '|');
    }
}
matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the' +
'text');

/*
function test(input) {

    let regex = /\w+/g;
    let temp = input.match(regex);
    console.log(temp.join('|'));
}
test('A Regular Expression needs to have the global flag in order to match all occurrences in the' +
    'text');
*/