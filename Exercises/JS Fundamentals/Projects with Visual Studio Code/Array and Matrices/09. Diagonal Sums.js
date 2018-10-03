function diagonalSum(matrix){
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let arr = [];

    for (let a = 0; a < matrix.length; a++) {
        leftDiagonal += matrix[a][a];
    }
    arr.push(leftDiagonal);

    let count = matrix[0].length - 1;
    for (let a = 0; a < matrix.length; a++) {

        for (let b = matrix[0].length - 1; b >= 0; b--) {
            if(b === count){
                rightDiagonal += matrix[a][b];
                count--;
                break;
            }
        }
    }
    arr.push(rightDiagonal);
    console.log(arr.join(' '));
}
//diagonalSum([[3, 5, 17],
//            [-1, 7, 14],
//            [1, -8, 89]]);
