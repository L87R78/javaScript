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
//diagonalSum([[3, 5, 17],
//   [-1, 7, 14],
//   [1, -8, 89]]);
