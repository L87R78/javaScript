function solve(arr) {
    let step = Number(arr.pop());

    let resultArr = [];

    for (let a = 0; a < arr.length; a+=step){
        resultArr.push(arr[a]);
    }

    for (let num of resultArr){
        console.log(num);
    }
}
solve(`[5, 20, 31, 4, 20,
2,
]`);