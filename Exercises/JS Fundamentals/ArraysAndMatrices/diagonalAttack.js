function orbit(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    let sumLeftDiagonal = 0;
    let sumRightDiagonal = 0;


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if(col == row){
                sumLeftDiagonal += matrix[row][col];
            }

            if(col == matrix[col].length - 1 - row){
                sumRightDiagonal += matrix[row][col];
            }

        }

    }
    if(sumRightDiagonal == sumLeftDiagonal){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (col == row) {
                    continue;
                }

                if (col == matrix[col].length - 1 - row) {
                    continue;
                }
                matrix[row][col] = sumLeftDiagonal;
                //let result = matrix.map(row => row.join(' ')).join('\n');
                //console.log(result);
                //console.log('\n');
            }
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);

}