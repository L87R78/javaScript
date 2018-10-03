/*
function averageNum(num){
    num = num.toString();
    if (num.length <= 6) {
       
        let arr = [];
        let count = 0;
        for (let n of num) {
            if(n === '0'){
                count++
            }
            if(count === num.length){
                return
            }
            arr.push(n);
        }
        while(true){
            let sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += Number(arr[i]); 
            }
            var avg = sum / arr.length;
            if(avg <= 5){
                arr.push('9');
            }else{
                break;
            }
        }
        var newArr = arr.map(Number);
        let result = '';
        for (const num of newArr) {
            result += num;
        }
        result = Number(result)
        console.log(result)
    }
}
//averageNum('0020')
*/
//--------------------------------------------------------------------------------------------

function modifyAverage(num) {
    let numAsStr = num.toString();
    let sum = sumDigits(numAsStr)
    while (sum / numAsStr.length <= 5) {
        numAsStr += '9';
        sum = sumDigits(numAsStr);
    }
    console.log(numAsStr);

    function sumDigits(numAsStr) {
        let sum = 0;
        for (let digit of numAsStr) {
            sum += Number(digit);
        }
        return sum;
    }
}
//modifyAverage(101)