function concatenateReversed(arr){
    arr = arr.reverse();

    let result = '';

    for (let word of arr) {
        word = word.split('').reverse().join('');
        result += word;
    }
    console.log(result)
}
//concatenateReversed(['I', 'am', 'student']);