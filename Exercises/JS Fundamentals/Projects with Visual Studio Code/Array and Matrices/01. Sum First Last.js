function sumFirstAndLast(arr){
    if(arr.length === 1){
        return +arr[0] + +arr[0];
    }
    let firstNum = +arr.shift();
    let lastNum = +arr.pop();
    
    let result = firstNum + lastNum;
    return result;  
}
//sumFirstAndLast(['10'])