function numbersSequence(arr) {
    let maxNum = Number.NEGATIVE_INFINITY;
    let tempNum = 0;
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr[a].length; b++) {

            tempNum = arr[a][b];
            if(tempNum > maxNum){
                maxNum = tempNum;
            }
        }
    }
    console.log(maxNum);
}
//numbersSequence([[20, -50, -10],
//  [-8, -33, -145]])