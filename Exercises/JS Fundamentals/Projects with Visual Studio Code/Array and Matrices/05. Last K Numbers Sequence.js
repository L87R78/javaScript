function numbersSequence(n , k) {

    let nn = Number(n);
    let kk = Number(k);

    let arr = [];
    arr[0] = 1;

    for (let indexInSeq  = 1; indexInSeq  < nn; indexInSeq ++) {
        let result = 0;

        for (let prevIndexOfSeq  = indexInSeq - 1; prevIndexOfSeq >= 0 && prevIndexOfSeq >= indexInSeq - kk; prevIndexOfSeq --) {
           result = result + arr[prevIndexOfSeq];
        }
        arr[indexInSeq] = result;
    }
    console.log(arr.join(' '));
}
//numbersSequence(6, 3)