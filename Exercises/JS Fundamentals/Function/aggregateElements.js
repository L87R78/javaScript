function aggregateElements(arr) {

    let sum = arr.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    console.log(sum);

    let sumInverse = 0;
    for(let num of arr){
        sumInverse += 1/num;
    }
    console.log(sumInverse);

    let str = "";
    for(let num of arr){
         str += num.toString();
    }
    console.log(str);
}
//aggregateElements([1, 2, 3]);