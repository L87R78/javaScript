function magicMatrices(matrix) {

    let matrixRow = []
    let matrixCol = []

    //sum row
    for (let a = 0; a < matrix.length; a++) {
        let sum = 0;
        for (let b = 0; b < matrix[a].length; b++) {
            sum += matrix[a][b];
        }
        matrixRow.push(sum)
        if(matrixRow[0] != matrixRow[a]){
            console.log('false')
            return
        }
    }
    //console.log(matrixRow.join(' '))
    let lengthMatrix = matrix.length * matrix.length

    //sum col

    let countMatrix = 0;
    let countLoop = 0;
    let count = 0
    let sum = 0;
    for (let a = 0; a < lengthMatrix; a++) {

        if(a == matrix[0].length){
            matrixCol.push(sum)
            if(matrixCol[0] != matrixCol[count]){
                console.log('false')
                return
            }
            count++
            a = -1
            sum = 0;
            continue
        }
        else if(countLoop === lengthMatrix){
            break
        }

        for (let b = count; b < 1000; b++) {
           sum += matrix[a][b]
            break
        }
        countLoop++
    }
    //console.log(matrixCol.join(' '))
    let finishResultCol = matrixCol.reduce((x, y) => x + y)
    let finishResultRow = matrixRow.reduce((x, y) => x + y)

    if(finishResultCol == finishResultRow){
        console.log('true')
    }else{
        console.log('false')
    }
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])






