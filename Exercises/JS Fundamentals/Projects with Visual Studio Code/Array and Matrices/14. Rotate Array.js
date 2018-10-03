function rotate(arr){
    let rotNum = Number(arr.pop());
    for (let i = 0; i < rotNum; i++) {
        let del = arr.pop();
        arr.unshift(del) 
    }
    console.log(arr.join(' '))
}
//rotate(['1', 
//'2', 
//'3', 
//'4', 
//'2']);
