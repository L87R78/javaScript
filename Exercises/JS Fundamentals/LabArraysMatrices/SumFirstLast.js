function magicMatrices(arr) {
    let sum = 0;
    if(arr.length == 1){
        sum = Number(arr[0]) + Number(arr[0]);
    }
    else{
        let firstNum = arr.shift();
        let lastNum = arr.pop();

        sum = Number(firstNum) + Number(lastNum);
    }
    console.log(sum)
}
//magicMatrices(['20', '30', '40']);