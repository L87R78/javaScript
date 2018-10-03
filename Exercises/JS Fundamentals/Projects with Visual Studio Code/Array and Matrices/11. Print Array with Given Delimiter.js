function printArr(arr){
    let symbol = arr.pop();
    let newArr = [];
    let result = arr
            .filter((word) => {
                if(word !== symbol){
                   newArr.push(word);
                }
            
                return 
            })
console.log(newArr.join(symbol))
}
//printArr(['How about no?', 
//'I',
//'will', 
//'not', 
//'do', 
//'it!', 
//'_']);