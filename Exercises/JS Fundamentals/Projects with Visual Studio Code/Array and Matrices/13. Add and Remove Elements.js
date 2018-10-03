function addAndRemove(arr){
    let resultArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] === 'add'){
            resultArr.push(i + 1);
        }else if(arr[i] === 'remove' && resultArr.length !== 0){
            resultArr = resultArr.slice(0, resultArr.length - 1)
        }
    }
    if(resultArr.length === 0){
        console.log('Empty')
    }else{
        resultArr.forEach(function(element) {
            console.log(element);
        });
    }
}
//addAndRemove(['add', 
//'add', 
//'add', 
//'add', 
//'add']
//);