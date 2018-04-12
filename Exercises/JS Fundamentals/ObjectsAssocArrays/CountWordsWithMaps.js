function CountWordsWithMaps(arr) {
    let obj = {};
    //arr = String.prototype.toLowerCase.apply(arr).split(',')
    for(let key of arr){
        let currentWords = key.split(/[^0-9a-zA-Z]+/)
            .filter(a => a !== '')
        for (let word of currentWords) {
            if (obj.hasOwnProperty(word)) {
                obj[word] += Number(1)
            } else {
                obj[word] = Number(1)
            }
        }
    }
    console.log(JSON.stringify(obj))

}
//CountWordsWithMaps(['Far', 'too', 'slow', 'you', 're', 'far', 'too', 'slow'])