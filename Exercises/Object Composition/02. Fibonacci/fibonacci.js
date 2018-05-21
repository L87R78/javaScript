/*
function counterClosure() {
    let firstNum = 0;
    let secondNum = 1;
    let thirdNum = 1;

    return function () {

        thirdNum = secondNum;
        secondNum = firstNum + secondNum;
        firstNum = thirdNum;
        return firstNum


    }
}

let result = counterClosure();
result(); //1
result(); //1
result(); //2
result(); //3
result(); //5
*/






/*
function solve(input) {
    let lengthNum = input;

    return function () {
        let fib = [1, 1];
        for(let i=fib.length; i < lengthNum; i++) {
            fib[i] = fib[i-2] + fib[i-1];
            //console.log(fib[i]);
        }
        console.log(`[${fib.join(', ')}]`);


    }
}
let count = solve(5);
count();
*/

































