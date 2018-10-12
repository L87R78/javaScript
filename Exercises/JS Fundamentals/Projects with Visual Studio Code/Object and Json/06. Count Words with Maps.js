/*
function countWordsWithMaps(input) {

    let obj = {};
    let arr = input.split(' ').toString();
    let newArr = arr.split(/[^0-9a-zA-Z]+/gi);

    for(let key of newArr){
        let currentWords = key
        currentWords = currentWords.toLowerCase();
        if(currentWords !== ''){
            if (obj.hasOwnProperty(currentWords)) {
                obj[currentWords] += Number(1)
            } else {
                obj[currentWords] = Number(1)
            }
        }
    }
    Object.keys(obj)
        .sort()
        .forEach(function(v, i) {
            console.log(`'${v}' ->  ${obj[v]} times`);
        });
    //console.log(JSON.stringify(obj))
}
countWordsWithMaps("JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --")
*/

function countWordsMAps(arr) {
    let myMap = new Map()
    for (let str of arr) {
        let words = str.split(/[^0-9a-zA-Z_]+/)
            .filter(s => s.trim() !== '')
        for (let word of words) {
            word = word.toLowerCase()
            if(myMap.has(word)){
                myMap.set(word, myMap.get(word) + 1)
            }else{
                myMap.set(word, 1)
            }
        }
    }
    let resultArr = Array.from(myMap.keys())
                    .sort((a,b) => a.localeCompare(b))
    for (let key of resultArr) {
        console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times')
    }
    //console.log(myMap)
}
countWordsMAps(['Far', 'too', 'slow', 'you', 're', 'far', 'too', 'slow'])