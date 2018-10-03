function printEveryStepp(arr){
    let lastEl = Number(arr.pop());

    for (let i = 0; i < arr.length; i+=lastEl) {
        
        console.log(arr[i]);
    }

}
printEveryStepp(['1', 
'2',
'3', 
'4', 
'5', 
'6']);