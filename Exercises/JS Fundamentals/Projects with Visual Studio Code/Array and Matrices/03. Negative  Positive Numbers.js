function magicMatrices(arr) {
    let arrResult =  [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0){
            arrResult.unshift(arr[i]);
        }
        else{
            arrResult.push(arr[i]);
        }
    }
    console.log(arrResult.join('\n'));
}
//magicMatrices([7, -2, 8, 9])