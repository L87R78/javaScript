/*
function countWord(arrInput){
    let obj = {};
    console.log(arrInput)
   
    
        
    for (let a = 0; a < arrInput.length; a++) {
        let arr = arrInput.split(/[., \s+']+/gi);
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
            if(word !== ""){
                if(!obj.hasOwnProperty(word)){
                    obj[word] = Number(1)
                }else{
                    obj[word] += Number(1)
                }
            }
            
        }
    }
    
    console.log(JSON.parse(JSON.stringify(obj)))
}
countWord("Far too slow, you're far too slow.")
*/
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