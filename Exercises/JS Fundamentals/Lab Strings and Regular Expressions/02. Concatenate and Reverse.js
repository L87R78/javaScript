function str(input) {
    let resultStr = "";
    for (let i = input.length - 1; i >= 0; i--) {
        let temp = input[i];
        temp = temp.split('').reverse().join('');
        resultStr += temp;
    }
    console.log(resultStr)
}
//str(['I', 'am', 'student']);