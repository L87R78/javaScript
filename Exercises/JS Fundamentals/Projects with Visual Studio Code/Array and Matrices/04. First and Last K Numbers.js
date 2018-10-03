function magicMatrices(arr) {

    let k = arr.shift(arr);
    let firstK = [];
    let lastK = [];

    firstK = arr.slice(0, k);
    lastK = arr.slice(-k);
    
    console.log(firstK);
    console.log(lastK);

}
//magicMatrices([2,
 //   7, 8, 9])