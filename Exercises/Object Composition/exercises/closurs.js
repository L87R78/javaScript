/*
function counterClosure() {
    let counter = 0;

    return function () {
        console.log(++counter);
    }
}
let count = counterClosure();
count();
count();
count();
count();
count();
count();
let count2 = counterClosure();
count2();
count2();
// 1
// 2
// 3
// 4
// 5
// 6
// 1    //това е count2
// 2    //това е count2

//............................................................................................................................................
*/

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
//..............................................................................................................................................................

//module Pattern




