function neighBors(matrix) {
    let count = 0;
    //&& matrix[a + 1] <= matrix[row].length
    for (let row = 0; row < matrix.length; row++) {
        if(row + 1 <= matrix.length){
            for (let a = 0; a < matrix[row].length; a++) { //?
                if(matrix[row][a] === matrix[row][a + 1] ){
                    count++;
                }
            }

            for (let b = 0; b < matrix[row].length; b++) { //?

                if(row + 1 === matrix.length){
                    break;
                }
                if(matrix[row][b] === matrix[row + 1][b]){
                    count++;
                }
            }
        }
    }
    console.log(count)
}
//neighBors([['2', '3', '4', '7', '0'],
//            ['4', '0', '5', '3', '4'],
//            ['2', '3', '5', '4', '2'],
//            ['9', '8', '7', '5', '4']])