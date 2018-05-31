/*
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
*/

function step(arr) {
    let lastEl = Number(arr.pop());
    let list = [];

    for (let i = 0; i < arr.length; i+= lastEl) {
        list.push(arr[i])
    }
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]) + '\n';
    }
}
step([5, 20, 31, 4, 20, 2]);



































