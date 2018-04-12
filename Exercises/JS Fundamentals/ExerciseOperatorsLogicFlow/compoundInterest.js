function compoundInterest(arr) {

    let p = arr[0];
    let i = arr[1];
    let n = arr[2];
    let t = arr[3];

    let f = p * Math.pow(1 + i/n, nt);
    console.log(f)

}
compoundInterest([1500, 4.3, 3, 6]);