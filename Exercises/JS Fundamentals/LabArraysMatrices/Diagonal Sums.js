/*
function diagonalSum(matrix) {
    let sumLeft = 0;
    let sumRight = 0;
    let list = [];
    for (let a = 0; a < matrix.length; a++) {
        for (let b = a; b < a + 1; b++) {
            sumLeft += matrix[a][b];
        }
    }
    list.push(sumLeft);
    let count = 0;
    for (let a = matrix.length - 1; a >= 0; a--) {
        for (let b = count; b < 100000; b++) {
            sumRight += matrix[a][b];
            count++;
            break;
        }
    }
    list.push(sumRight);
    console.log(list.join(' '));
}
diagonalSum([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]]);
*/
function diagonalSum(arr) {

    let firstDiagonal = 0;
    let lastDiagonal = 0;
    for (let a = 0; a < arr.length; a++) {
        firstDiagonal += (arr[a][a]);
    }
    let count = 0;
    for (let b = arr.length - 1; b >= 0; b--) {
        lastDiagonal += (arr[b][count]);
        count++
    }
    console.log(firstDiagonal + " " + lastDiagonal);
}
diagonalSum([[3, 5, 17],
   [-1, 7, 14],
   [1, -8, 89]]);
