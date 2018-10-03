function solve(arr){
    let newArr = [];
   
    
    for (let i = 0; i < arr.length; i++) {
        let tempNum = arr[0];

        if(arr[i] > arr[i - 1] && tempNum < arr[i]){
           newArr.push(arr[i]);
        }
    }
    
    let firstNumArr = arr.shift();
    newArr.unshift(firstNumArr)
    newArr.forEach(function(el) {
        console.log(el)   
    });
}
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]) 
