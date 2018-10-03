function biggestEl(matrix) {

    console.log(matrix.map(arr => arr
                .sort((a,b) => a < b)[0])
                .sort((c,d) => c < d)[0]
    );

}
//biggestEl([[100,200],[13,3, 10]])