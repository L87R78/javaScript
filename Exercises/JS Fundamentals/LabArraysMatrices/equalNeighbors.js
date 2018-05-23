/*
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
*/

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

neighBors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);


