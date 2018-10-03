
function diagonalAttack(matrixInput) {

    let matrix = [];
    for (let i = 0; i < matrixInput.length; i++) {
        matrix.push(matrixInput[i].split(' ').map(Number));
    }

    let sumDiagonalLeft = 0;
    let sumDiagonalRight = 0;
    for (let a = 0; a < matrix.length; a++) {
        sumDiagonalLeft += (matrix[a][a]);
    }
    let count = 0;
    for (let b = matrix.length - 1; b >= 0; b--) {
        sumDiagonalRight += (matrix[b][count]);
        count++
    }

    if(sumDiagonalRight === sumDiagonalLeft){
        for (let row = 0; row < matrix.length; row++) {

            for (var insideRow = 0; insideRow < matrix.length; insideRow++) {

                if(insideRow !== row && insideRow !== matrix.length - 1 - row){
                    matrix[row][insideRow] = sumDiagonalLeft

                }
            }
        }
        let result = matrix.map(row => row.join(' ')).join('\n');
        console.log(result)

    }else{
        let result = matrix.map(row => row.join(' ')).join('\n');
        console.log(result)
    }

}
//diagonalAttack(['1 1 1',
//    '1 1 1',
//    '1 1 0']
//);
