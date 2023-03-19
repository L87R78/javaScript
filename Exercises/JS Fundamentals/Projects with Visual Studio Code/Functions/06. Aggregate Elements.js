function solve(arr){
    let sum = 0;
    let sumInverse = 0;
    let concat = '';

    for (const key of arr) {
        sum += key
        concat += key
    }
    sumInverse = 0;
    for (let num of arr) {
       sumInverse += 1 / num;
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concat)
}
solution([1, 2, 3]);