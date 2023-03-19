/*
function solve(arr) {
    let closure = (function () {
        let largest = 0;
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        //console.log(largest)
        //return largest
    })();

}
solution([1, 44, 1244444444444443, 333232332]);
*/

/*
function solution (input) {
    return Math.max.apply(null,input)
}
//solution([-3, -1, -34, 43, -50]);
*/

function solution (input) {
   //return Math.max(...input);
    return Math.max.apply('stamat', input);
    //eturn Math.max(...input);
}

console.log(solution([-3, -1, -34, 43, -50]));;


