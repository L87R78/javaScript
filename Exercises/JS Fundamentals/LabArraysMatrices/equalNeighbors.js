function equalNeighbors(matrix) {

    let count = 0;
    for (let a = 0; a < matrix.length; a++) {
        for (let b = 0; b < matrix[a].length; b++) {
            if(matrix[a][b] == matrix[a][b + 1]){
                count++
            }
            if(matrix[1 + a] != undefined){
                if(matrix[a + 1][b] == matrix[a][b]){

                    //console.log(matrix[a][b])
                    //console.log(matrix[a + 1][b])
                    count++
                }
            }
        }
    }
    console.log(count)
}
//equalNeighbors([['2', '2', '5', '7', '4'],
//                ['4', '0', '5', '3', '4'],
//                ['2', '5', '5', '4', '2']]);

//equalNeighbors([['test', 'yes', 'yo', 'ho'],
//    ['well', 'done', 'yo', '6'],
//    ['not', 'done', 'yet', '5']])

equalNeighbors([['1', '1'],
                ['1', '1']]
               );


