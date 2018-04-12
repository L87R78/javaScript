function ExtractDecreasingSubsequenceFromArray(arr) {

    arr = arr.filter(e => Number(e))
    let resultArr = []
    resultArr.push(arr[0]);


    for (let i = 1; i < arr.length; i++) {
       if(arr[i] > resultArr[resultArr.length - 1]){
           resultArr.push(arr[i])
       }
    }
    console.log(resultArr.join(' ' + '\n'))
}
//ExtractDecreasingSubsequenceFromArray([' '])
///*
ExtractDecreasingSubsequenceFromArray(['1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1'

])
//*/
